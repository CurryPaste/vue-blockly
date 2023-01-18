<template>
  <div>
    <div ref="blocklyDiv" class="blocklyDiv" />
    <xml ref="blocklyToolbox" style="display:none">
      <slot />
    </xml>
  </div>
</template>

<script>
/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly Vue Component.
 * @author samelh@google.com (Sam El-Husseini)
 */
import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'
import { defaultOption, defaultJson } from './customBlock'
import './customBlock'

export default {
  name: 'BlocklyComponent',
  props: {
    options: {
      type: Object,
      default: undefined
    },
    toolbox: {
      type: Object,
      default: undefined
    },
    /** 画布初始json */
    defaultJson: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      workspace: null
    }
  },
  watch: {
    toolbox: {
      handler(newTree) {
        this.updateToolbox(newTree)
      },
      deep: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const { options = {}, toolbox } = this.$props
      const resopt = { ...defaultOption, ...options }
      if (!toolbox) {
        resopt.toolbox = this.$refs['blocklyToolbox']
      } else {
        resopt.toolbox = toolbox
      }
      this.workspace = Blockly.inject(this.$refs['blocklyDiv'], resopt)
      this.$nextTick(() => this.jsonLoad({ ...defaultJson, ...this.defaultJson }))
    },
    updateToolbox(newTree) {
      //
      this.workspace.updateToolbox(newTree)
    },
    jsonSave() {
      const json = Blockly.serialization.workspaces.save(this.workspace)
      return json
    },
    jsonLoad(json) {
      Blockly.serialization.workspaces.load({ ...json }, this.workspace)
    },
    json2Code() {
      return javascriptGenerator.workspaceToCode(this.workspace)
    },
    runCode(codeParam = undefined) {
      // Generate JavaScript code and run it.
      window.LoopTrap = 1000
      javascriptGenerator.INFINITE_LOOP_TRAP =
          'if (--window.LoopTrap == 0) throw "Infinite loop.";\n'
      const code = codeParam || javascriptGenerator.workspaceToCode(this.workspace)
      javascriptGenerator.INFINITE_LOOP_TRAP = null
      try {
        // eslint-disable-next-line no-eval
        eval(code)
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
