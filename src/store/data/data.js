import router from '../../routes/index'


const state = {

}

const mutations = {

}

const actions = {
    contentDetail(_,dataObj){
        console.log(dataObj)
        localStorage.setItem('contentId',dataObj.contentid)
        localStorage.setItem('contentTypeId',dataObj.contenttypeid)
        router.push({
            path:'/contentDetail'
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}