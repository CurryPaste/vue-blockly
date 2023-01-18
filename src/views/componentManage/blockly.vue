<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="app-container">
    <!--  -->
    <el-tag class="mb4 mr4">toolbox: xml插槽</el-tag>
    <el-tag class="mb4 mr4">工具箱: flyoutToolbox</el-tag>
    <el-button size="small" @click="load">展示</el-button>
    <el-button size="small" @click="save">保存</el-button>
    <el-button size="small" @click="json2Code">打印代码</el-button>
    <el-button size="small" @click="runCode">执行当前画布代码</el-button>
    <BlocklyComponent id="blockly3" ref="refblockly3" style="width: 100%;height: calc(100vh - 170px);" :toolbox="toolbox3"></BlocklyComponent>

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
      toolbox3: {
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
                type: 'custom_switch_main'
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
            name: '列表',
            colour: '%{BKY_LISTS_HUE}',
            contents: [
              {
                kind: 'block',
                type: 'lists_create_empty'
              },
              {
                kind: 'block',
                type: 'lists_create_with'
              },
              {
                kind: 'block',
                type: 'lists_repeat',
                inputs: {
                  NUM: {
                    block: {
                      type: 'math_number',
                      fields: {
                        NUM: 5
                      }
                    }
                  }
                }
              },
              {
                kind: 'block',
                type: 'lists_length'
              },
              {
                kind: 'block',
                type: 'lists_isEmpty'
              },
              {
                kind: 'block',
                type: 'lists_indexOf'
              },
              {
                kind: 'block',
                type: 'lists_getIndex'
              },
              {
                kind: 'block',
                type: 'lists_setIndex'
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
          },
          {
            'kind': 'sep'
          },
          {
            kind: 'category',
            name: '助手函数',
            contents: [
              {
                kind: 'block',
                type: 'controls_for',
                inputs: {
                  FROM: {
                    block: {
                      type: 'math_number',
                      fields: {
                        NUM: 1
                      }
                    }
                  },
                  TO: {
                    block: {
                      type: 'math_number',
                      fields: {
                        NUM: 10
                      }
                    }
                  },
                  BY: {
                    block: {
                      type: 'math_number',
                      fields: {
                        NUM: 1
                      }
                    }
                  }
                }
              },
              {
                kind: 'block',
                type: 'procedures_defreturn',
                fields: { NAME: '判断值x是否存在于列表y中' },
                extraState: {
                  params: [
                    {
                      name: '要查找的值X'
                    },
                    {
                      name: '被查找的列表Y'
                    }
                  ]
                },
                icons: {
                  comment: {
                    width: 400,
                    height: 80,
                    text: '要查找的值X，被查找的值Y。\n如果X存在于Y中，返回true，否则返回false。'
                  }
                },
                inputs: {
                  STACK: {
                    block: {
                      type: 'procedures_ifreturn',
                      inputs: {
                        CONDITION: {
                          block: {
                            type: 'logic_compare',
                            fields: {
                              OP: 'GTE'
                            },
                            inputs: {
                              A: {
                                block: {
                                  type: 'lists_indexOf',
                                  fields: { END: 'FIRST' },
                                  inputs: {
                                    FIND: {
                                      block: {
                                        type: 'variables_get',
                                        fields: {
                                          VAR: {
                                            name: '被查找的列表Y'
                                          }
                                        }
                                      }
                                    },
                                    VALUE: {
                                      block: {
                                        type: 'variables_get',
                                        fields: {
                                          VAR: {
                                            name: '要查找的值X'
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              B: {
                                block: {
                                  type: 'math_number',
                                  fields: {
                                    NUM: 1
                                  }
                                }
                              }
                            }
                          }
                        },
                        VALUE: {
                          block: {
                            type: 'logic_boolean',
                            fields: {
                              BOOL: 'TRUE'
                            }
                          }
                        }
                      }
                    }
                  },
                  RETURN: {
                    block: {
                      type: 'logic_boolean',
                      fields: {
                        BOOL: 'FALSE'
                      }
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {

  },
  methods: {
    load() {
      const refblockly3 = localStorage.getItem('refblockly3')
      if (refblockly3) this.$refs['refblockly3'].jsonLoad(JSON.parse(refblockly3))
    },
    save() {
      const json = this.$refs['refblockly3'].jsonSave()
      console.log(json, 'json')
      // this.$confirm('确定保存当前画布吗', 'Confirm ', {
      //   type: 'warning'
      // }).then(() => {
      //   localStorage.setItem('refblockly3', JSON.stringify(json))
      //   this.$message('保存成功')
      // })
    },
    json2Code() {
      const code = this.$refs['refblockly3'].json2Code()
      console.log(code)
      alert(code)
    },
    runCode() {
      this.$refs['refblockly3'].runCode()
    },
    testFun() {
      const xingbie = '男生'
      const zhiye = '军人'
      const gongzuodiqu = '山东'
      const haizishuliang = 2
      const nianshouru = 1000
      const nianling = 34
      const getFenshu1 = () => {
        if (xingbie === '男生') {
          if (haizishuliang === 0) return 50
          if (haizishuliang === 1) return 75
          if (haizishuliang === 2) return 100
          return 0
        } else if (xingbie === '女生') {
          if (haizishuliang === 0) return 70
          if (haizishuliang === 1) return 100
          if (haizishuliang === 2) return 50
          return 0
        }
      }
      const getFenshu1Xishu = () => {
        if (nianling < 30) return 1.1
        if (nianling < 40) return 1.5
        if (nianling < 50) return 1.3
        return 1
      }
      const getFenshu2 = () => {
        if (zhiye === '无业') return 0
        if (['老师', '军人', '公务员'].includes(zhiye)) return 200
        if (['司机', '高空作业人员'].includes(zhiye)) return 50
        return 100
      }
      const getFenshu3 = () => {
        if (['北京', '上海', '广州'].includes(gongzuodiqu)) {
          if (nianshouru < 3000) return 300
          if (nianshouru < 6000) return 350
          if (nianshouru < 10000) return 400
          return 600
        } else if (['江苏', '浙江'].includes(gongzuodiqu)) {
          if (nianshouru < 3000) return 400
          if (nianshouru < 6000) return 450
          if (nianshouru < 10000) return 500
          return 650
        } else {
          if (nianshouru < 3000) return 500
          if (nianshouru < 6000) return 550
          if (nianshouru < 10000) return 600
          return 750
        }
      }
      const getFenshu3Xishu = () => {
        if (['北京', '上海', '广州'].includes(gongzuodiqu)) {
          if (getFenshu2() >= 100) return 0.2
          if (getFenshu2() < 100) return 0.1
        } else {
          if (getFenshu2() > 150) return 0.3
          if (getFenshu2() <= 150) return 0.25
        }
      }

      console.log(`结果： ${getFenshu1() * getFenshu1Xishu() + getFenshu3() * getFenshu3Xishu()}`)
    }
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
