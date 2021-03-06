import $ from 'jquery'



let QueryURL = 'https://api-panberes.devmrm.ir/graphql';
let sendUserData = (code,name,phone,gender,testResult,age,addressText,addressCoordinates,maritalStatus,callback)=>{
    console.log(`${JSON.stringify(testResult)}`)
    let query = `
   mutation{
   testResult(
   code:"${code}"
   name:"${name}"
   phone:"${phone}"
   gender:"${gender}"
   testResult:${JSON.stringify(testResult)}
   age:${age}
   addressText:"${addressText}"
   addressCoordinates:"${addressCoordinates}"
   maritalStatus:"${maritalStatus}"
   )
   }
    `
    $.ajax({
        url: QueryURL,
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify({
            query: query
        })
    }).then((res) => {
        callback(res)
    })

}
export default sendUserData