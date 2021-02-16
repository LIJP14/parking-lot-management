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
                @change="selectChange"
                class="inline-form-item"
            >
            </a-select>
        </a-form-item>

        <a-form-item>
            <a-input
                v-model:value="form.name"
                placeholder="请输入车场名称"
                class="inline-form-item"
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
        :data-source="data"
        :loading="false"
        bordered
        :pagination="false"
        :row-selection="rowSelection"
        @change="tableChange"
        class="list-table"
    >
        <template #title>
            <div>
                <a-button type="danger">
                    <template #icon> <DeleteOutlined /> </template> 删除
                </a-button>

                <a-space style="float: right;">
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
                <template #icon> <EditOutlined /> </template> 编辑
            </a-button>

            <a-button type="danger">
                <template #icon> <DeleteOutlined /> </template> 删除
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
import { defineComponent } from 'vue';

import { SearchOutlined, DeleteOutlined, ExportOutlined, QrcodeOutlined, PrinterOutlined, EditOutlined } from "@ant-design/icons-vue";


import { ColumnProps } from 'ant-design-vue/es/table/interface';

// console.log(Object.keys(ColumnProps) );
type Key = ColumnProps['key'];
interface DataType {
    key: Key;
    name: string;
    age: number;
    address: string;
}


type TableDataType = {
    key: number;
    name: string;
    age: number;
    street: string;
    building: string;
    number: number;
    companyAddress: string;
    companyName: string;
    gender: string;
};


export default defineComponent({
    name: "ParkingLotList",
    components: { SearchOutlined, DeleteOutlined, ExportOutlined, QrcodeOutlined, PrinterOutlined, EditOutlined },
    data () {
        return {
            form: {
                id: undefined,
                name: ''
            },

            currentPage: 1,
            pageSize: 10,
            totalSize: 50,

            rowSelection: {
                onChange: this.rowSelectChange
            },

            columns: [
                // {
                //     title: '',
                //     slots: { customRender: 'firstThead' },
                //     // width: 100
                //     children:
                // }
                {
                    title: '序列号',
                    align: 'center',
                    dataIndex: 'x'
                },
                {
                    title: '车场名称',
                    align: 'center',
                    dataIndex: 'y'
                },
                {
                    title: '联系人',
                    align: 'center',
                    dataIndex: 'z'
                },
                {
                    title: '联系方式',
                    align: 'center',
                    dataIndex: 'x'
                },
                {
                    title: '详细地址',
                    align: 'center',
                    dataIndex: 'x'
                },
                {
                    title: '创建时间',
                    align: 'center',
                    dataIndex: 'x',
                    sorter: true
                },
                {
                    title: '操作',
                    align: 'center',
                    slots: { customRender: 'operation' }
                }
            ],

            data: [...Array(1)].map((_, i) => ({
                key: i,
                name: 'John Brown',
                age: i + 1,
                street: 'Lake Park',
                building: 'C',
                number: 2035,
                companyAddress: 'Lake Street 42',
                companyName: 'SoftLake Co',
                gender: 'M'
            }))
        };
    },

    methods: {
        selectChange () {
            console.log(this.form.id);
        },

        /**
         * 表格行选中项发生变化时的回调
         * @param selectedRowKeys
         * @param selectedRows
         */
        rowSelectChange (selectedRowKeys: Key[], selectedRows: DataType[]) {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },

        /**
         * 表格排序、筛选变化时触发
         */
        tableChange (pagination: any, filters: boolean, sorter: any) {
            console.log(sorter);
        },

        /**
         * 页码改变回调
         * @param page
         * @param pageSize
         */
        pageChange (page: number, pageSize: number) {
            console.log(page, pageSize);
        },

        /**
         * pageSize 变化回调
         * @param current
         * @param size
         */
        pageSizeChange (current: number, size: number) {
            console.log(current);
        }
    }

});
</script>

<style scoped lang="scss">
    .list-table {
        margin: 20px 0 10px;

        ::v-deep .ant-table-title {
            background-color: #fafafa;
        }

    }
</style>
