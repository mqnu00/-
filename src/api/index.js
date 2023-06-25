// 对所有的api接口进行统一管理
import requests from './request'

// 获取小说列表
export const novelList = () => requests({
    url: '/novel/page/load',
    method: 'get',
})