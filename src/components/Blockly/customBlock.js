
import * as Blockly from 'blockly/core'
import { Mutator } from 'blockly/core'
import * as hans from 'blockly/msg/zh-hans'
import Vue from 'vue'
Vue.config.ignoredElements = ['field', 'block', 'category', 'xml', 'mutation', 'value', 'sep', 'next', 'statement', 'arg']

export const defaultOption = {
  media: 'media/', // 从页面（或帧）到 Blockly 媒体目录的路径。 默认值为 "https://blockly-demo.appspot.com/static/media/"。

  horizontalLayout: true, // 工具箱水平
  toolboxPosition: 'end', // 工具箱在底部
  oneBasedIndex: true, // 如果 true 列表和字符串操作应从 1 编入索引，则如果 false 来自 0，则应将其编入索引。默认值为 true
  readOnly: false, // true，则禁止用户修改。禁止显示工具箱和垃圾桶
  renderer: 'zelos', // 一种类似于刮刮器的渲染程序
  scrollbars: true, // 工作区滚动方式
  sounds: true, // 声音
  theme: 'deuteranopia', // 主题  deuteranopia/protanopia/tritanopia https://developers.google.com/blockly/guides/configure/web/themes#block_style
  trashcan: true, // 垃圾箱

  move: {
    scrollbars: {
      horizontal: true,
      vertical: true
    },
    drag: true,
    wheel: true
  }, // 移动方式，滚动条、拖动、鼠标滚轮
  grid: {
    spacing: 50, // 间距
    length: 3,
    colour: '#ccc',
    snap: true// 网格吸附
  }, // 画布网格
  zoom: {
    controls: true,
    wheel: false, // 鼠标滚动缩放
    startScale: 1.0,
    maxScale: 4,
    minScale: 0.7,
    scaleSpeed: 1.2,
    pinch: true // 触摸设备上启用双指张合缩放功能
  }, // 配置缩放行为
  // https://developers.google.com/blockly/guides/configure/web/toolbox
  toolbox: undefined
}
Blockly.setLocale(hans)

Blockly.defineBlocksWithJsonArray([
  // control-case
  {
    'type': 'controls_switch_case',
    'lastDummyAlign0': 'CENTER',
    'message0': 'case ',
    'previousStatement': null,
    'nextStatement': null,
    'colour': 230,
    'tooltip': '',
    'helpUrl': ''
  },
  // controls_switch_main
  {
    'type': 'controls_switch_main',
    'lastDummyAlign0': 'CENTRE',
    'message0': 'switch',
    'nextStatement': null,
    'colour': 230,
    'tooltip': '',
    'helpUrl': ''
  },
  // TODO： 这里要怎么把default写在默认里呢
  // {
  //   'type': 'controls_switch_main',
  //   'lastDummyAlign0': 'RIGHT',
  //   'message0': 'switch %1 %2 default',
  //   'args0': [
  //     {
  //       'type': 'input_dummy',
  //       'align': 'CENTRE'
  //     },
  //     {
  //       'type': 'input_value',
  //       'name': 'case',
  //       'align': 'RIGHT'
  //     }
  //   ],
  //   'inputsInline': false,
  //   'colour': 230,
  //   'tooltip': '',
  //   'helpUrl': ''
  // },
  // switch-case
  {
    'type': 'custom_switch_case',
    'message0': 'case:  %1 %2',
    'args0': [
      {
        'type': 'field_input',
        'name': 'caseValue',
        'text': ''
      },
      {
        'type': 'input_statement',
        'name': 'case',
        'align': 'RIGHT'
      }
    ],
    'previousStatement': null,
    'nextStatement': null,
    'colour': 230,
    'tooltip': '',
    'helpUrl': ''
  },
  // switch-main
  {
    'type': 'custom_switch_main',
    'message0': 'switch %1 %2 case:  %3 %4 default:  %5',
    'args0': [
      {
        'type': 'field_variable',
        'name': 'switchName',
        'variable': 'item'
      },
      {
        'type': 'input_dummy',
        'align': 'CENTRE'
      },
      {
        'type': 'field_input',
        'name': 'caseValue',
        'text': 'caseValue'
      },
      {
        'type': 'input_statement',
        'name': 'case',
        'align': 'RIGHT'
      },
      {
        'type': 'input_statement',
        'name': 'switchDefault',
        'align': 'RIGHT'
      }
    ],
    'previousStatement': null,
    'nextStatement': null,
    'colour': 230,
    'tooltip': '',
    'helpUrl': '',
    'mutator': 'mutator_custom_switch'
  }
])

const Msg = Blockly.Msg
// const xmlUtils = Blockly.utils.xml
const CONTROLS_SWITCH_MUTATOR = {
  elseifCount_: 0,
  elseCount_: 0,
  caseCount_: 0,
  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {?{elseIfCount: (number|undefined), haseElse: (boolean|undefined)}}
   *     The state of this block, ie the else if count and else state.
   */
  saveExtraState: function() {
    console.log('saveExtraState')
    if (!this.elseifCount_ && !this.elseCount_ && !this.caseCount_) {
      return null
    }
    const state = Object.create(null)
    if (this.elseifCount_) {
      state['elseIfCount'] = this.elseifCount_
    }
    if (this.caseCount_) {
      state['caseCount'] = this.caseCount_
    }
    if (this.elseCount_) {
      state['hasElse'] = true
    }
    return state
  },
  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block, ie the else if count and
   *     else state.
   */
  loadExtraState: function(state) {
    console.log('loadExtraState')
    this.elseifCount_ = state['elseIfCount'] || 0
    this.elseCount_ = state['hasElse'] ? 1 : 0
    this.caseCount_ = state['caseCount'] || 0
    this.updateShape_()
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Workspace} workspace Mutator's workspace.
   * @return {!Block} Root block in mutator.
   * @this {Block}
   */
  decompose: function(workspace) {
    console.log('decompose')
    const containerBlock = workspace.newBlock('controls_switch_main')
    containerBlock.initSvg()
    let connection = containerBlock.nextConnection
    for (let i = 1; i <= this.elseifCount_; i++) {
      const elseifBlock = workspace.newBlock('controls_if_elseif')
      elseifBlock.initSvg()
      connection.connect(elseifBlock.previousConnection)
      connection = elseifBlock.nextConnection
    }
    for (let i = 1; i <= this.caseCount_; i++) {
      const caseBlock = workspace.newBlock('controls_switch_case')
      caseBlock.initSvg()
      connection.connect(caseBlock.previousConnection)
      connection = caseBlock.nextConnection
    }
    if (this.elseCount_) {
      const elseBlock = workspace.newBlock('controls_if_else')
      elseBlock.initSvg()
      connection.connect(elseBlock.previousConnection)
    }
    return containerBlock
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Block} containerBlock Root block in mutator.
   * @this {Block}
   */
  compose: function(containerBlock) {
    console.log('compose')
    let clauseBlock = containerBlock.nextConnection.targetBlock()
    // Count number of inputs.
    this.elseifCount_ = 0
    this.elseCount_ = 0
    this.caseCount_ = 0
    const valueConnections = [null]
    const statementConnections = [null]
    let elseStatementConnection = null
    while (clauseBlock) {
      if (clauseBlock.isInsertionMarker()) {
        clauseBlock = clauseBlock.getNextBlock()
        continue
      }
      switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++
          valueConnections.push(clauseBlock.valueConnection_)
          statementConnections.push(clauseBlock.statementConnection_)
          break
        case 'controls_if_else':
          this.elseCount_++
          elseStatementConnection = clauseBlock.statementConnection_
          break
        case 'controls_switch_case':
          this.caseCount_++
          console.log('compose_switch')
          break
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type)
      }
      clauseBlock = clauseBlock.getNextBlock()
    }
    this.updateShape_()
    // Reconnect any child blocks.
    this.reconnectChildBlocks_(
      valueConnections, statementConnections, elseStatementConnection)
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Block} containerBlock Root block in mutator.
   * @this {Block}
   */
  saveConnections: function(containerBlock) {
    console.log('saveConnections')
    let clauseBlock = containerBlock.nextConnection.targetBlock()
    let i = 1
    while (clauseBlock) {
      if (clauseBlock.isInsertionMarker()) {
        clauseBlock = clauseBlock.getNextBlock()
        continue
      }
      switch (clauseBlock.type) {
        case 'controls_if_elseif': {
          const inputIf = this.getInput('IF' + i)
          const inputDo = this.getInput('DO' + i)
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection
          i++
          break
        }
        case 'controls_if_else': {
          const inputDo = this.getInput('ELSE')
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection
          break
        }
        case 'controls_switch_case': {
          console.log(this.getInput('IF'))
          // TODO: 这个getInput方法原理是啥啊 getInput
          break
        }
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type)
      }
      clauseBlock = clauseBlock.getNextBlock()
    }
  },
  /**
   * Reconstructs the block with all child blocks attached.
   * @this {Block}
   */
  rebuildShape_: function() {
    console.log('rebuildShape_')
    const valueConnections = [null]
    const statementConnections = [null]
    let elseStatementConnection = null

    if (this.getInput('ELSE')) {
      elseStatementConnection =
          this.getInput('ELSE').connection.targetConnection
    }
    for (let i = 1; this.getInput('IF' + i); i++) {
      const inputIf = this.getInput('IF' + i)
      const inputDo = this.getInput('DO' + i)
      valueConnections.push(inputIf.connection.targetConnection)
      statementConnections.push(inputDo.connection.targetConnection)
    }
    this.updateShape_()
    this.reconnectChildBlocks_(
      valueConnections, statementConnections, elseStatementConnection)
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @this {Block}
   * @private
   */
  updateShape_: function() {
    console.log('updateShape_')
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE')
    }
    for (let i = 1; this.getInput('IF' + i); i++) {
      this.removeInput('IF' + i)
      this.removeInput('DO' + i)
    }
    // Rebuild block.
    for (let i = 1; i <= this.elseifCount_; i++) {
      this.appendValueInput('IF' + i).setCheck('Boolean').appendField(
        Msg['CONTROLS_IF_MSG_ELSEIF'])
      this.appendStatementInput('DO' + i).appendField(
        Msg['CONTROLS_IF_MSG_THEN'])
    }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE').appendField(
        Msg['CONTROLS_IF_MSG_ELSE'])
    }
  },
  /**
   * Reconnects child blocks.
   * @param {!Array<?RenderedConnection>} valueConnections List of
   * value connections for 'if' input.
   * @param {!Array<?RenderedConnection>} statementConnections List of
   * statement connections for 'do' input.
   * @param {?RenderedConnection} elseStatementConnection Statement
   * connection for else input.
   * @this {Block}
   */
  reconnectChildBlocks_: function(
    valueConnections, statementConnections, elseStatementConnection) {
    console.log('reconnectChildBlocks_')
    for (let i = 1; i <= this.elseifCount_; i++) {
      Mutator.reconnect(valueConnections[i], this, 'IF' + i)
      Mutator.reconnect(statementConnections[i], this, 'DO' + i)
    }
    Mutator.reconnect(elseStatementConnection, this, 'ELSE')
  }
}
Blockly.Extensions.registerMutator(
  'mutator_custom_switch', CONTROLS_SWITCH_MUTATOR, null,
  ['controls_if_elseif', 'controls_switch_case'])

