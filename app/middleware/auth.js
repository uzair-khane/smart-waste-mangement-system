export default defineNuxtRouteMiddleware((to,from)=>{
    const token = useCookie("token");
    if(!token.value){
        alert("pleace Login first")
        return navigateTo("/login")
    }
})