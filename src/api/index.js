// 对所有的api接口进行统一管理
import requests from './request'

// 获取小说列表
export const novelList = () => requests({
    url: '/novel/page/load',
    method: 'get',
})

// 获取小说卷列表
export const volumeList = (novelId) => requests({
    url: '/volumeList?novel_id=' + novelId,
    method: 'get',
})

// 获取小说卷内容
export const volumeReader = (volumeId) => requests({
    url: '/volumeReader?volume_id=' + volumeId,
    method: 'get',
})

// 下载小说
export const download = (data) => requests({
    url: '/download',
    method: 'post',
    data: data,
})

// 更新小说数据库
export const update = () => requests({
    url: '/update',
    method: 'get',
})