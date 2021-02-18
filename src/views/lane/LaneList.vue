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
            </a-select>
        </a-form-item>

        <a-form-item>
            <a-input
                v-model:value="form.name"
                placeholder="请输入车道名称"
                class="inline-form-item"
            />
        </a-form-item>

        <a-form-item>
            <a-input
                v-model:value="form.cameraId"
                placeholder="请输入相机序列号"
                class="inline-form-item"
            />
        </a-form-item>

        <a-form-item>
            <a-select
                v-model:value="form.laneType"
                allowClear
                placeholder="车道类型"
                @change="laneTypeChange"
                class="inline-form-item"
            >
            </a-select>
        </a-form-item>

        <a-form-item>
            <a-select
                v-model:value="form.cameraType"
                allowClear
                placeholder="相机类型"
                @change="cameraTypeChange"
                class="inline-form-item"
            >
            </a-select>
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
        :scroll="{x: true}"
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

        <template #laneType>
            <!--<a-tag color="green">出口</a-tag>-->
            <a-tag>Tag 1</a-tag>
            <a-tag color="#87d068">tag</a-tag>
        </template>

        <template #operation>
            <a-button type="primary">
                <template #icon> <FieldTimeOutlined /> </template> 校准时间
            </a-button>

            <a-button type="primary">
                <template #icon> <SettingOutlined /> </template> 相机配置
            </a-button>

            <a-button type="primary">
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

import { SearchOutlined, DeleteOutlined, ExportOutlined, QrcodeOutlined, PrinterOutlined, EditOutlined, FieldTimeOutlined, SettingOutlined } from "@ant-design/icons-vue";

import { ColumnProps } from 'ant-design-vue/es/table/interface';


type Key = ColumnProps['key'];

interface DataType {
    key: Key;
    name: string;
    age: number;
    address: string;
}

export default defineComponent({
    name: "LaneList",
    components: { SearchOutlined, DeleteOutlined, ExportOutlined, QrcodeOutlined, PrinterOutlined, EditOutlined, FieldTimeOutlined, SettingOutlined },
    data () {
        return {
            form: {
                id: undefined,
                name: '',
                cameraId: '',
                laneType: undefined,
                cameraType: undefined
            },

            currentPage: 1,
            pageSize: 10,
            totalSize: 50,

            rowSelection: {
                fixed: true,
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
                    title: '车道名称',
                    align: 'center',
                    dataIndex: 'z'
                },
                {
                    title: '车道类型',
                    align: 'center',
                    slots: { customRender: 'laneType' }
                },
                {
                    title: '相机型号',
                    align: 'center',
                    dataIndex: 'x1'
                },
                {
                    title: '道闸端口号',
                    align: 'center',
                    dataIndex: 'x2'
                },
                {
                    title: '相机序列号',
                    align: 'center',
                    dataIndex: 'x3'
                },
                {
                    title: '通讯状态',
                    align: 'center',
                    dataIndex: 'x4'
                },
                {
                    title: '操作',
                    align: 'center',
                    fixed: 'right',
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
        /**
         * 车场回调
         */
        idChange () {
            console.log(this.form.id);
        },

        /**
         * 车道类型回调
         */
        laneTypeChange () {
            console.log(this.form.laneType);
        },

        /**
         * 相机类型回调
         */
        cameraTypeChange () {
            console.log(this.form.cameraType);
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

<style scoped>
    ::v-deep .ant-table td {
        white-space: nowrap;
    }
</style>
