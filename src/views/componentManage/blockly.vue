<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="app-container">
    <!--  -->
    <el-tag class="mb4 mr4">toolbox: xml插槽</el-tag>
    <el-tag class="mb4 mr4">工具箱: flyoutToolbox</el-tag>
    <BlocklyComponent id="blockly1" style="width: 700px;height: 500px;">
      <!-- <block type="controls_ifelse"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null" disabled="true"></block>
      <block type="logic_ternary"></block>
      <block type="text_charAt">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block> --><category name="Logic" colour="%{BKY_LOGIC_HUE}">
    <category name="If">
      <block type="controls_if"></block>
      <block type="controls_if">
        <mutation else="1"></mutation>
      </block>
      <block type="controls_if">
        <mutation elseif="1" else="1"></mutation>
      </block>
    </category>
    <category name="Boolean" colour="%{BKY_LOGIC_HUE}">
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null"></block>
      <block type="logic_ternary"></block>
    </category>
  </category>
      <category name="Loops" colour="%{BKY_LOOPS_HUE}">
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <block type="math_number">
              <field name="NUM">10</field>
            </block>
          </value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for">
          <field name="VAR">i</field>
          <value name="FROM">
            <block type="math_number">
              <field name="NUM">1</field>
            </block>
          </value>
          <value name="TO">
            <block type="math_number">
              <field name="NUM">10</field>
            </block>
          </value>
          <value name="BY">
            <block type="math_number">
              <field name="NUM">1</field>
            </block>
          </value>
        </block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>
      </category>
      <category name="Math" colour="%{BKY_MATH_HUE}">
        <block type="math_number">
          <field name="NUM">123</field>
        </block>
        <block type="math_arithmetic"></block>
        <block type="math_single"></block>
        <block type="math_trig"></block>
        <block type="math_constant"></block>
        <block type="math_number_property"></block>
        <block type="math_round"></block>
        <block type="math_on_list"></block>
        <block type="math_modulo"></block>
        <block type="math_constrain">
          <value name="LOW">
            <block type="math_number">
              <field name="NUM">1</field>
            </block>
          </value>
          <value name="HIGH">
            <block type="math_number">
              <field name="NUM">100</field>
            </block>
          </value>
        </block>
        <block type="math_random_int">
          <value name="FROM">
            <block type="math_number">
              <field name="NUM">1</field>
            </block>
          </value>
          <value name="TO">
            <block type="math_number">
              <field name="NUM">100</field>
            </block>
          </value>
        </block>
        <block type="math_random_float"></block>
        <block type="math_atan2"></block>
      </category>
      <category name="Lists" colour="%{BKY_LISTS_HUE}">
        <block type="lists_create_empty"></block>
        <block type="lists_create_with"></block>
        <block type="lists_repeat">
          <value name="NUM">
            <block type="math_number">
              <field name="NUM">5</field>
            </block>
          </value>
        </block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf"></block>
        <block type="lists_getIndex"></block>
        <block type="lists_setIndex"></block>
      </category>
      <sep></sep>
      <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
      </category>
      <category name="Functions" custom="PROCEDURE" colour="%{BKY_PROCEDURES_HUE}">
      </category>
      <sep></sep>
      <category name="Library" expanded="true">
        <category name="Randomize">
          <block type="procedures_defnoreturn">
            <mutation>
              <arg name="list"></arg>
            </mutation>
            <field name="NAME">randomize</field>
            <statement name="STACK">
              <block type="controls_for" inline="true">
                <field name="VAR">x</field>
                <value name="FROM">
                  <block type="math_number">
                    <field name="NUM">1</field>
                  </block>
                </value>
                <value name="TO">
                  <block type="lists_length" inline="false">
                    <value name="VALUE">
                      <block type="variables_get">
                        <field name="VAR">list</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="BY">
                  <block type="math_number">
                    <field name="NUM">1</field>
                  </block>
                </value>
                <statement name="DO">
                  <block type="variables_set" inline="false">
                    <field name="VAR">y</field>
                    <value name="VALUE">
                      <block type="math_random_int" inline="true">
                        <value name="FROM">
                          <block type="math_number">
                            <field name="NUM">1</field>
                          </block>
                        </value>
                        <value name="TO">
                          <block type="lists_length" inline="false">
                            <value name="VALUE">
                              <block type="variables_get">
                                <field name="VAR">list</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="variables_set" inline="false">
                        <field name="VAR">temp</field>
                        <value name="VALUE">
                          <block type="lists_getIndex" inline="true">
                            <mutation statement="false" at="true"></mutation>
                            <field name="MODE">GET</field>
                            <field name="WHERE">FROM_START</field>
                            <value name="AT">
                              <block type="variables_get">
                                <field name="VAR">y</field>
                              </block>
                            </value>
                            <value name="VALUE">
                              <block type="variables_get">
                                <field name="VAR">list</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="lists_setIndex" inline="false">
                            <value name="AT">
                              <block type="variables_get">
                                <field name="VAR">y</field>
                              </block>
                            </value>
                            <value name="LIST">
                              <block type="variables_get">
                                <field name="VAR">list</field>
                              </block>
                            </value>
                            <value name="TO">
                              <block type="lists_getIndex" inline="true">
                                <mutation statement="false" at="true"></mutation>
                                <field name="MODE">GET</field>
                                <field name="WHERE">FROM_START</field>
                                <value name="AT">
                                  <block type="variables_get">
                                    <field name="VAR">x</field>
                                  </block>
                                </value>
                                <value name="VALUE">
                                  <block type="variables_get">
                                    <field name="VAR">list</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="lists_setIndex" inline="false">
                                <value name="AT">
                                  <block type="variables_get">
                                    <field name="VAR">x</field>
                                  </block>
                                </value>
                                <value name="LIST">
                                  <block type="variables_get">
                                    <field name="VAR">list</field>
                                  </block>
                                </value>
                                <value name="TO">
                                  <block type="variables_get">
                                    <field name="VAR">temp</field>
                                  </block>
                                </value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </statement>
          </block>
        </category>
        <category name="Jabberwocky">
          <block type="text_print">
            <value name="TEXT">
              <block type="text">
                <field name="TEXT">'Twas brillig, and the slithy toves</field>
              </block>
            </value>
            <next>
              <block type="text_print">
                <value name="TEXT">
                  <block type="text">
                    <field name="TEXT">  Did gyre and gimble in the wabe:</field>
                  </block>
                </value>
                <next>
                  <block type="text_print">
                    <value name="TEXT">
                      <block type="text">
                        <field name="TEXT">All mimsy were the borogroves,</field>
                      </block>
                    </value>
                    <next>
                      <block type="text_print">
                        <value name="TEXT">
                          <block type="text">
                            <field name="TEXT">  And the mome raths outgrabe.</field>
                          </block>
                        </value>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
          <block type="text_print">
            <value name="TEXT">
              <block type="text">
                <field name="TEXT">"Beware the Jabberwock, my son!</field>
              </block>
            </value>
            <next>
              <block type="text_print">
                <value name="TEXT">
                  <block type="text">
                    <field name="TEXT">  The jaws that bite, the claws that catch!</field>
                  </block>
                </value>
                <next>
                  <block type="text_print">
                    <value name="TEXT">
                      <block type="text">
                        <field name="TEXT">Beware the Jubjub bird, and shun</field>
                      </block>
                    </value>
                    <next>
                      <block type="text_print">
                        <value name="TEXT">
                          <block type="text">
                            <field name="TEXT">  The frumious Bandersnatch!"</field>
                          </block>
                        </value>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </category>
      </category>
    </BlocklyComponent>

    <div style="height: 10px;"></div>
    <el-tag class="mb4 mr4">toolbox: json</el-tag>
    <el-tag class="mb4 mr4">工具箱: categoryToolbox</el-tag>
    <BlocklyComponent id="blockly2" style="width: 700px;height: 500px;" :toolbox="toolbox" />
  </div>
</template>

<script>
import BlocklyComponent from '@/components/Blockly/BlocklyComponent.vue'
export default {
  name: 'Blockly',
  components: {
    BlocklyComponent
  },
  data() {
    return {
      toolbox: {
        kind: 'categoryToolbox', // flyoutToolbox categoryToolbox
        contents: [
          {
            kind: 'category',
            name: '逻辑',
            colour: '%{BKY_LOGIC_HUE}',
            contents: [
              {
                kind: 'block',
                type: 'controls_if'
              },
              {
                kind: 'block',
                type: 'logic_compare'
              },
              {
                kind: 'block',
                type: 'logic_operation'
              },
              {
                kind: 'block',
                type: 'logic_negate'
              },
              {
                kind: 'block',
                type: 'logic_boolean'
              }
            ]
          },
          {
            kind: 'category',
            name: '循环',
            colour: '%{BKY_LOOPS_HUE}',
            contents: [
              {
                kind: 'block',
                type: 'controls_repeat_ext',
                inputs: {
                  TIMES: {
                    block: {
                      type: 'math_number',
                      fields: {
                        NUM: 10
                      }
                    }
                  }
                }
              },
              {
                kind: 'block',
                type: 'controls_whileUntil'
              }
            ]
          },
          {
            kind: 'category',
            name: '数学',
            colour: '%{BKY_MATH_HUE}',
            contents: [
              {
                kind: 'block',
                type: 'math_number',
                field: {
                  NUM: 123
                }
              },
              {
                kind: 'block',
                type: 'math_arithmetic'
              },
              {
                kind: 'block',
                type: 'math_single'
              }
            ]
          },
          {
            kind: 'category',
            name: '文本',
            colour: '%{BKY_TEXTS_HUE}',
            contents: [
              {
                kind: 'block',
                type: 'text'
              },
              {
                kind: 'block',
                type: 'text_length'
              },
              {
                kind: 'block',
                type: 'text_print'
              }
            ]
          },
          {
            'kind': 'sep'
          },
          {
            kind: 'category',
            name: '变量',
            custom: 'VARIABLE'
          },
          {
            kind: 'category',
            name: '函数',
            custom: 'PROCEDURE'
          }
        ]
      }
    }
  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
.mb4 {
  margin-bottom: 4px;
}
.mr4 {
  margin-right: 4px;
}
</style>
