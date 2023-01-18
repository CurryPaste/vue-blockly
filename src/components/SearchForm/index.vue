<!--
 * @Description: 表单搜索组件，具体使用可参考src\views\homeVisit\application\ApplicationList的mixins: [search]
formList: [{
    name: '显示的参数名', // 表单label
    type: 'Input', // 表单项类型
    value: '', //默认值
    width: '200px',
    labelName: '申请编号'   //备注
}]
-->
<template>
  <div>
    <el-form
      ref="searchForm"
      :label-width="labelWidth"
      class="dy-search-form"
      size="small"
      :validate-on-rule-change="false"
    >
      <el-row>
        <el-col v-for="(item, index) in list" :key="index" :span="item.span || 6">
          <el-form-item :label="item.labelName" :class="{searchStyle: item.isConnect !== true}">
            <el-input
              v-if="item.type === 'Input'"
              v-model="valueList[item.name]"
              :placeholder="item.placeholder ? item.placeholder : '输入'+item.labelName"
              clearable
              style="width: 100%"
            />
            <el-select
              v-if="item.type === 'Select'"
              v-model="valueList[item.name]"
              :clearable="item.clearable || true"
              :placeholder="item.placeholder ? item.placeholder : '选择'+item.labelName"
              :multiple="item.isMultiple || false"
              :collapse-tags="item.isMultiple || false"
              :filterable="item.filterable || true"
              style="width: 100%"
            >
              <el-option
                v-for="(itemOp, indexOp) in selectList[item.name]"
                :key="indexOp"
                :value="item.selectValue ? itemOp[item.selectValue] : item.selectIsArr ? itemOp : itemOp.value"
                :label="item.selectLabel ? itemOp[item.selectLabel] : item.selectIsArr ? itemOp : itemOp.label"
              />
            </el-select>
            <el-cascader
              v-if="item.type === 'Cascader'"
              v-model="valueList[item.name]"
              :options="selectList[item.name]"
              :clearable="item.clearable || true"
              :placeholder="item.placeholder ? item.placeholder : '选择'+item.labelName"
              :collapse-tags="item.isMultiple || false"
              :filterable="item.filterable || true"
              :props="{ value: item.selectValue ? item.selectValue : 'value',
                        label: item.selectLabel ? item.selectLabel : 'label',
                        emitPath: item.emitPath ? item.emitPath : false,
                        multiple: item.isMultiple ? item.isMultiple : false,
                        checkStrictly: item.checkStrictly ? item.checkStrictly : false}"
              style="width: 100%"
            />
            <el-date-picker
              v-if="item.type === 'DatePicker' && item.dateType === 'date'"
              v-model="valueList[item.name]"
              type="date"
              value-format="yyyy-MM-dd"
              :placeholder="item.placeholder ? item.placeholder : '选择'+item.labelName"
              style="width: 100%"
            />
            <el-date-picker
              v-if="item.type === 'daterange'"
              v-model="valueList[item.name]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              style="width: 100%"
            /><!--日期 xxxx-xxxx -->
            <span v-if="item.connect" style="margin-left: 10px">{{ item.connect }}</span><!--连接两个组件的字符串如  xxx - xxx，中间的'-'就是这个值 -->
          </el-form-item>
        </el-col>
      </el-row>
      <template v-if="toRight">
        <el-button
          type="primary"
          size="mini"
          @click="handleSubmit()"
        >{{ searchText ? searchText : "查询" }}</el-button>
        <el-button
          size="mini"
          @click="handleReset()"
        >{{ resetText ? resetText : "重置" }}</el-button>
      </template>
      <div v-else flex="justify:right">
        <el-button
          type="primary"
          size="mini"
          @click="handleSubmit()"
        >{{ searchText ? searchText : "查询" }}</el-button>
        <el-button
          size="mini"
          @click="handleReset()"
        >{{ resetText ? resetText : "重置" }}</el-button>
        <slot name="buttonSlot" /> <!--插槽-->
        <el-button
          v-if="exportUrl"
          type="info"
          size="mini"
          @click="onExportPress()"
        >{{ exportText ? exportText : "导出" }}</el-button>
      </div>
      <slot name="downExtra" /> <!--额外插槽-->
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    searchText: {
      type: String,
      default: '查询'
    }, // 自定义搜索名称
    resetText: {
      type: String,
      default: '重置'
    },
    list: {
      type: Array,
      default: () => []
    }, // 数据列表
    labelWidth: {
      type: String,
      default: '110px'
    },
    optionList: {
      type: Object,
      default: () => { }
    }, // 下拉选项
    toRight: {
      type: Boolean,
      default: false
    },
    exportUrl: {
      type: String,
      default: ''
    }, // 导出接口地址
    exportText: {
      type: String,
      default: '导出'
    }
  },
  data() {
    return {
      valueList: {}, // 查询参数
      selectList: this.optionList // 下拉选项
    }
  },
  watch: {
    optionList(item) {
      this.selectList = item
    }
  },
  created() {
    this.setInitValue() // 生成提交数据结构
  },
  methods: {
    // 查询
    handleSubmit() {
      this.$emit('search', this.valueList)
    },
    handleReset() {
      this.valueList = {}
      this.$emit('search', this.valueList)
    },
    setInitValue() {
      const valueList = {}
      this.list.map(item => {
        valueList[item.name] = item.value
      })
      this.valueList = valueList
    },
    onExportPress() {
      console.log({
        url: process.env.VUE_APP_WEB + this.exportUrl,
        method: 'post',
        download3: true,
        responseType: 'blob',
        data: this.valueList
      })
    },
    setValueList(name, value) {
      this.valueList[name] = value
      this.$emit('search', this.valueList)
    }
  }
}
</script>

<style lang="scss" scoped>
  // .searchStyle{
  //   margin-left: 30px;
  // }
</style>
