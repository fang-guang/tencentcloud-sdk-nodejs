import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { CreateCommandResponse, RunCommandRequest, DescribeInvocationTasksRequest, ModifyCommandResponse, DeleteCommandResponse, DescribeCommandsResponse, DescribeAutomationAgentStatusRequest, InvokeCommandResponse, ModifyCommandRequest, DescribeCommandsRequest, DescribeInvocationsRequest, DescribeInvocationsResponse, DescribeInvocationTasksResponse, DescribeAutomationAgentStatusResponse, DeleteCommandRequest, InvokeCommandRequest, DescribeRegionsRequest, RunCommandResponse, DescribeRegionsResponse, CreateCommandRequest } from "./tat_models";
/**
 * tat client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 此接口用于查询命令详情。
     */
    DescribeCommands(req: DescribeCommandsRequest, cb?: (error: string, rep: DescribeCommandsResponse) => void): Promise<DescribeCommandsResponse>;
    /**
     * 此接口用于查询执行活动详情。
     */
    DescribeInvocations(req: DescribeInvocationsRequest, cb?: (error: string, rep: DescribeInvocationsResponse) => void): Promise<DescribeInvocationsResponse>;
    /**
     * 此接口用于查询执行任务详情。
     */
    DescribeInvocationTasks(req: DescribeInvocationTasksRequest, cb?: (error: string, rep: DescribeInvocationTasksResponse) => void): Promise<DescribeInvocationTasksResponse>;
    /**
     * 此接口用于查询地域列表
     */
    DescribeRegions(req?: DescribeRegionsRequest, cb?: (error: string, rep: DescribeRegionsResponse) => void): Promise<DescribeRegionsResponse>;
    /**
     * 此接口用于创建命令。
     */
    CreateCommand(req: CreateCommandRequest, cb?: (error: string, rep: CreateCommandResponse) => void): Promise<CreateCommandResponse>;
    /**
     * 此接口用于删除命令。
     */
    DeleteCommand(req: DeleteCommandRequest, cb?: (error: string, rep: DeleteCommandResponse) => void): Promise<DeleteCommandResponse>;
    /**
     * 此接口用于修改命令。
     */
    ModifyCommand(req: ModifyCommandRequest, cb?: (error: string, rep: ModifyCommandResponse) => void): Promise<ModifyCommandResponse>;
    /**
     * 此接口用于查询自动化助手客户端的状态。
     */
    DescribeAutomationAgentStatus(req: DescribeAutomationAgentStatusRequest, cb?: (error: string, rep: DescribeAutomationAgentStatusResponse) => void): Promise<DescribeAutomationAgentStatusResponse>;
    /**
     * 执行命令，调用成功返回执行活动ID（inv-xxxxxxxx），每个执行活动内部有一个或多个执行任务（invt-xxxxxxxx），每个执行任务代表命令在一台 CVM 或一台 Lighthouse 上的执行记录。

* 如果指定实例未安装 agent，或 agent 不在线，返回失败
* 如果命令类型与 agent 运行环境不符，返回失败
* 指定的实例需要处于 VPC 网络
* 指定的实例需要处于 `RUNNING` 状态
* 不可同时指定 CVM 和 Lighthouse
     */
    RunCommand(req: RunCommandRequest, cb?: (error: string, rep: RunCommandResponse) => void): Promise<RunCommandResponse>;
    /**
     * 在指定的实例上触发命令，调用成功返回执行活动ID（inv-xxxxxxxx），每个执行活动内部有一个或多个执行任务（invt-xxxxxxxx），每个执行任务代表命令在一台 CVM 或一台 Lighthouse 上的执行记录。

* 如果指定实例未安装 agent，或 agent 不在线，返回失败
* 如果命令类型与 agent 运行环境不符，返回失败
* 指定的实例需要处于 VPC 网络
* 指定的实例需要处于 RUNNING 状态
* 不可同时指定 CVM 和 Lighthouse
     */
    InvokeCommand(req: InvokeCommandRequest, cb?: (error: string, rep: InvokeCommandResponse) => void): Promise<InvokeCommandResponse>;
}
