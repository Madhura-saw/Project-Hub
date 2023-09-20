// api notification msgs
export const API_NOTIFICATION_MESSAGES ={
    loading :{
        title:'Loading..',
        message:'Data is being loaded'
    },
    sucess:{
        title: 'success',
        message:'Data successfully loaded'
    },
    responseFailure:{
        title:'error',
        message:'an error occured when fetching response'
    },
    requestFailure:{
        title:'error',
        message:'an error occured when while pasing request data'
    },
    networkError:{
        title:'error',
        message:'an error occured due to network issues'
    }

}
//if you want to add any api add its object here
// NEED SERVICE CALL : {url:'/',  method: 'POST/GET/DELETE/PUT', Pparams: true/false, query:true/false
export const SERVICE_URLS={
    userSignup: {url:'/signup', method:'POST'},
    userLogin: {url:'/login', method:'POST'},
    uploadFile:{url: 'file/upload', method:'POST'},
    createPost:{url:'create', method:'POST'},
    getAllPosts:{url:'/posts', method:'GET', params: true},
    getPostById: {url:'post', method:'GET', query:true},
    updatePost:{url:'update', method:'PUT', query:true},
    deletePost: { url: 'delete', method:'DELETE', query:true},
    newComment: {url:'/comment/new', method:'POST'},
    getAllComments: {url:'comments', method:'GET', query:true},
    deleteComment: {url:'comment/delete', method:'DELETE', query:true},
    createEvent:{url:'/createEvent', method:'POST'},
    getAllEvents:{url:'/events', method:'GET',params:true}, 
    getEventById: {url:'eventdetails', method:'GET', query:true},
    // register: {url:'/eventdetail/new', method:'POST'},
    register: {url:'/register/new', method:'POST'}, 
    getAllReg: {url:'eventdetail', method:'GET', query:true},
    getProfile: {url:'/profile', method:'GET', params:true},
    getAllProjects: {url:'/projects', method:'GET', params:true},
}  