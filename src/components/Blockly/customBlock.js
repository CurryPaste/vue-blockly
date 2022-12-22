
import * as Blockly from 'blockly/core'
import { FieldTextInput, Mutator } from 'blockly/core'
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

/** Custom - Unique - Name */
const NAME_SWITCH = {
  /** 转变器部分 */
  CONTROLS: {
    /** 转变器dialog中的switch - uniqueName */
    SWITCH_MAIN: 'CUSTOM_CON_SWITCH_MAIN'
  },

  /** BLOCKS部分 */
  BLOCKS: {
    /** 主体中 参与switch判断的变量 - uniqueName */
    SWITCH_VARIABLE: 'CUSTOM_BLOCKS_SWITCH_VARIABLE',
    /** 主体中 case块 -uniquedName */
    SWITCH_CASE_ITEM: 'CUSTOM_BLOCKS_SWITCH_ITEM',
    /** 主体中 case块 被比较的输入框 - uniqueName */
    SWITCH_CASE_INPUT: 'CUSTOM_SWITCH_CASE_INPUT',
    /** 主体中 default uniqueName */
    SWITCH_DEFAULT: 'CUSTOM_SWITCH_DEFAULT'
  }

}
Blockly.defineBlocksWithJsonArray([
  // 转变器case control-case
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
  // 转变器 controls_switch_main
  {
    'type': 'controls_switch_main',
    'lastDummyAlign0': 'CENTRE',
    'message0': 'switch %1 %2 default',
    'args0': [
      {
        'type': 'input_dummy',
        'align': 'CENTRE'
      },
      {
        'type': 'input_statement',
        'name': NAME_SWITCH.CONTROLS.SWITCH_MAIN,
        'align': 'CENTRE'
      }
    ],
    'colour': 230,
    'tooltip': '',
    'helpUrl': ''
  },
  // BLOCKS switch-main 这里只有 switch没有case块是因为，这里是注册switch主体，给工具箱用的，而case直接从代码里实现了
  // TODO: 这里要么去掉默认case，要么该顺序
  {
    'type': 'custom_switch_main',
    'message0': 'switch %1 %2 case:  %3 %4 default:  %5',
    'args0': [
      {
        'type': 'field_variable',
        'name': NAME_SWITCH.BLOCKS.SWITCH_VARIABLE,
        'variable': 'item'
      },
      {
        'type': 'input_dummy',
        'align': 'CENTRE'
      },
      {
        'type': 'field_input',
        'name': 'caseValue',
        'text': '0'
      },
      {
        'type': 'input_statement',
        'name': NAME_SWITCH.BLOCKS.SWITCH_CASE_INPUT + '0',
        'align': 'RIGHT'
      },
      {
        'type': 'input_statement',
        'name': NAME_SWITCH.BLOCKS.SWITCH_DEFAULT,
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
const Align = Blockly.Input.Align
const CONTROLS_SWITCH_ITEM = {
  itemCount_: 1,
  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {{itemCount: number}} The state of this block, ie the item count.
   */
  saveExtraState: function() {
    return {
      'itemCount': this.itemCount_
    }
  },
  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block, ie the item count.
   */
  loadExtraState: function(state) {
    this.itemCount_ = state['itemCount']
    this.updateShape_()
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Workspace} workspace Mutator's workspace.
   * @return {!Block} Root block in mutator.
   * @this {Block}
   */
  decompose: function(workspace) {
    const containerBlock = workspace.newBlock('controls_switch_main')

    containerBlock.initSvg()
    let connection = containerBlock.getInput(NAME_SWITCH.CONTROLS.SWITCH_MAIN).connection
    for (let i = 0; i < this.itemCount_; i++) {
      const itemBlock = workspace.newBlock('controls_switch_case')
      itemBlock.initSvg()
      connection.connect(itemBlock.previousConnection)
      connection = itemBlock.nextConnection
    }
    return containerBlock
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Block} containerBlock Root block in mutator.
   * @this {Block}
   */
  compose: function(containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock(NAME_SWITCH.CONTROLS.SWITCH_MAIN)
    // Count number of inputs.
    const connections = []
    while (itemBlock) {
      if (itemBlock.isInsertionMarker()) {
        itemBlock = itemBlock.getNextBlock()
        continue
      }
      connections.push(itemBlock.valueConnection_)
      itemBlock = itemBlock.getNextBlock()
    }
    // Disconnect any children that don't belong.
    for (let i = 0; i < this.itemCount_; i++) {
      const connection = this.getInput(NAME_SWITCH.BLOCKS.SWITCH_CASE_ITEM + i + 1).connection.targetConnection
      if (connection && connections.indexOf(connection) === -1) {
        connection.disconnect()
      }
    }
    this.itemCount_ = connections.length
    this.updateShape_()
    // Reconnect any child blocks.
    for (let i = 0; i < this.itemCount_; i++) {
      Mutator.reconnect(connections[i], this, NAME_SWITCH.BLOCKS.SWITCH_CASE_ITEM + i + 1)
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Block} containerBlock Root block in mutator.
   * @this {Block}
   */
  saveConnections: function(containerBlock) {
    let itemBlock = containerBlock.getInputTargetBlock(NAME_SWITCH.CONTROLS.SWITCH_MAIN)
    let i = 0
    while (itemBlock) {
      if (itemBlock.isInsertionMarker()) {
        itemBlock = itemBlock.getNextBlock()
        continue
      }
      const input = this.getInput(NAME_SWITCH.BLOCKS.SWITCH_CASE_ITEM + i + 1)
      itemBlock.valueConnection_ = input && input.connection.targetConnection
      itemBlock = itemBlock.getNextBlock()
      i++
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Block}
   */
  updateShape_: function() {
    console.log('updateShape_')
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY')
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY').appendField(
        Msg['LISTS_CREATE_EMPTY_TITLE'])
    }
    // Add new inputs.
    for (let i = 0; i < this.itemCount_; i++) {
      if (!this.getInput(NAME_SWITCH.BLOCKS.SWITCH_CASE_ITEM + i + 1)) {
        // const input = this.appendValueInput('ADD' + i).setAlign(Align.RIGHT)
        this.addCase_(i)
        if (i === 0) {
          // input.appendField(Msg['LISTS_CREATE_WITH_INPUT_WITH'])
          console.log(`第${0}个`)
        }
      }
    }
    // Remove deleted inputs.
    for (let i = this.itemCount_; this.getInput(NAME_SWITCH.BLOCKS.SWITCH_CASE_ITEM + i + 1); i++) {
      this.removeInput(NAME_SWITCH.BLOCKS.SWITCH_CASE_ITEM + i + 1)
    }
  },
  addCase_: function(i) {
    this.appendStatementInput(NAME_SWITCH.BLOCKS.SWITCH_CASE_ITEM + i + 1).setAlign(Align.RIGHT).appendField('case: ').appendField(new FieldTextInput(i), NAME_SWITCH.BLOCKS.SWITCH_CASE_INPUT + i + 1)
  }
}
Blockly.Extensions.registerMutator(
  'mutator_custom_switch', CONTROLS_SWITCH_ITEM, null,
  ['controls_switch_case'])

