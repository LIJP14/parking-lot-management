interface RouteConfig {
    alias: string;
}

export interface RoutesConfig {
    [key: string]: RouteConfig;
}

const routesConfig: RoutesConfig = {
    ParkingLotManagement: { alias: '车场管理' },
    LaneManagement: { alias: '车道管理' },
    UsageRecord: { alias: '出入场记录' },
    OpenGateRecord: { alias: '远程开闸记录' }
};

export default routesConfig;
