<template>
    <a-form
        layout="inline"
        :model="form"
    >
        <a-form-item>
            <a-select
                v-model:value="form.id"
                allowClear
                placeholder="请选择车场"
                @change="idChange"
                class="inline-form-item"
            >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="tom">Tom</a-select-option>
            </a-select>
        </a-form-item>

        <a-form-item>
            <a-input v-model:value="form.numberPlate" placeholder="请输入车牌号" />
        </a-form-item>

        <a-form-item>
            <a-input v-model:value="form.orderNumber" placeholder="请输入订单号" />
        </a-form-item>

        <a-form-item>
            <a-select
                v-model:value="form.orderStatus"
                allowClear
                placeholder="订单状态"
                @change="idChange"
                class="inline-form-item"
            >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="tom">Tom</a-select-option>
            </a-select>
        </a-form-item>

        <a-form-item>
            <a-select
                v-model:value="form.result"
                allowClear
                placeholder="验证结果"
                @change="idChange"
                class="inline-form-item"
            >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="tom">Tom</a-select-option>
            </a-select>
        </a-form-item>

        <a-form-item>
            <a-range-picker
                :show-time="{ format: 'HH:mm:ss' }"
                format="YYYY-MM-DD HH:mm:ss"
                :placeholder="['识别时间起', '识别时间止']"
                @ok="rangePickerOk"
                style="width: 390px;"
            />
        </a-form-item>

        <a-form-item>
            <a-button type="primary" html-type="submit">
                <template #icon> <SearchOutlined /> </template> 搜索
            </a-button>

            <a-button type="danger">
                <template #icon> <DeleteOutlined /> </template> 清空
            </a-button>

            <a-button style="background-color: #000000;border-color: #000000;color: #ffffff;">
                <template #icon> <ExportOutlined /> </template> 导出
            </a-button>

        </a-form-item>
    </a-form>

    <a-table
        :columns="columns"
        :data-source="tableData"
        :loading="false"
        bordered
        :pagination="false"
        :row-selection="rowSelection"
        @change="tableChange"
        class="list-table"
    >
        <template #title>
            <div style="text-align: right;">
                <!--<a-button type="danger">-->
                <!--    <template #icon> <DeleteOutlined /> </template> 删除-->
                <!--</a-button>-->

                <a-space>
                    <!--transparent !important-->
                    <a-button>
                        <template #icon> <QrcodeOutlined /> </template>
                    </a-button>

                    <a-button>
                        <template #icon> <PrinterOutlined /> </template>
                    </a-button>

                    <a-button>
                        <template #icon> <ExportOutlined /> </template>
                    </a-button>
                </a-space>
            </div>
        </template>

            <template #operation>
                <a-button type="primary" html-type="submit">
                    <template #icon> <FileImageOutlined /> </template> 出入场图片
                </a-button>
            </template>
    </a-table>

    <a-pagination
        v-model:current="currentPage"
        v-model:pageSize="pageSize"
        :total="totalSize"
        show-size-changer
        show-quick-jumper
        :show-total="total => `共 ${total} 条`"
        @change="pageChange"
    />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Moment } from 'moment';
import { ColumnProps } from 'ant-design-vue/es/table/interface';

import { SearchOutlined, DeleteOutlined, ExportOutlined, QrcodeOutlined, PrinterOutlined, FileImageOutlined } from "@ant-design/icons-vue";


type Key = ColumnProps['key'];

interface FormType {
    id: string | null;
    lane: string | null;
    numberPlate: string | null;
    orderNumber: string | null;
    orderStatus: string | null;
    result: string | null;
}

interface DataType {
    key: Key;
    name: string;
    age: number;
    address: string;
}


@Options({
    components: { SearchOutlined, DeleteOutlined, ExportOutlined, QrcodeOutlined, PrinterOutlined, FileImageOutlined }
})
export default class UsageList extends Vue {
    currentPage = 1;
    pageSize = 10;
    totalSize = 0;

    form: FormType = {
        id: null,
        lane: null,
        numberPlate: null,
        orderNumber: null,
        orderStatus: null,
        result: null
    };


    columns = [
        {
            title: '序列号',
            align: 'center',
            dataIndex: 'x'
        },
        {
            title: '车场名称',
            align: 'center',
            dataIndex: 'z'
        },
        {
            title: '车道名称',
            align: 'center',
            dataIndex: 'x'
        },
        {
            title: '车牌号',
            align: 'center',
            dataIndex: 'x'
        },
        {
            title: '平台验证结果',
            align: 'center',
            dataIndex: 'x'
        },
        {
            title: '订单状态',
            align: 'center',
            dataIndex: 'x',
            sorter: true
        },
        {
            title: '识别时间',
            align: 'center',
            dataIndex: 'x',
            sorter: true
        },
        {
            title: '操作',
            align: 'center',
            slots: { customRender: 'operation' }
        }
    ];

    tableData = [...Array(1)].map((_, i) => ({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M'
    }));


    rowSelection = {
        onChange: this.rowSelectChange
    };

    idChange () {
        console.log(this.form.id);
    }

    /**
     * 车道 selec 框回调
     */
    laneChange () {
        console.log(this.form);
    }

    /**
     * 时间插件上的"确定"事件
     */
    rangePickerOk (value: Moment[]) {
        console.log('onOk,  ', value);
    }

    /**
     * 表格行选中项发生变化时的回调
     * @param selectedRowKeys
     * @param selectedRows
     */
    rowSelectChange (selectedRowKeys: Key[], selectedRows: DataType[]) {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }

    /**
     * 表格排序、筛选变化时触发
     */
    tableChange (pagination: any, filters: boolean, sorter: any) {
        console.log(sorter);
    }

    /**
     * 页码改变回调
     */
    pageChange () {
        console.log(this.currentPage);
    }
};
</script>

<style scoped>

</style>
