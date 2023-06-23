import App from "@/App.vue";
import novelLists from "@/components/novelLists.vue";
import novelDownload from "@/components/novelDownload.vue";
import volumepage from "@/components/Volumepage.vue";
import novelPage from "@/components/novelPage.vue";

const routes = [
    {
        name: 'home',
        path: '/home',
        component: App
    },
    {
        name: 'novelList',
        path: '/novelList',
        component: novelLists
    },
    {
        name: 'novelDownloader',
        path: '/novelDownloader',
        component: novelDownload
    },
    {
        name: 'volumeList',
        path: '/volumeList/:novel_id',
        component: novelPage
    },
    {
        name: 'volumeReader',
        path: '/volumeReader/:volume_id',
        component: volumepage
    },
]

export default routes