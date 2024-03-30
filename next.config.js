/** @type {import('next').NextConfig} */
module.exports= {
    generateBuildId:async ()=>{
        return Math.random().toString(36)+"NextJSAPP"
    },
};


