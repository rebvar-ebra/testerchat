import express from 'express';
import bodyParser from 'body-parser';
import env from 'dotenv'
import cors from 'cors'
import {Configuration ,OpenAIApi } from 'openai';

const app= express()
env.config()
app.use(cors())
app.use(bodyParser.json())
/// config api
const configuration = new Configuration({
    organization:"org-1ZOVY5sxECphkjVZQ9b3llKA",
    apiKey:process.env.OPENAI_API_KEY
})

const openai =  new OpenAIApi(configuration)


///listening
app.listen("3000",()=>console.log("Listening on port 3000"))


///rote test
app.get("/",(req,res)=>{
    res.send("hello World")
})

///post rote to request

app.post("/",async(req,res)=>{
    const {message}= req.body

    try {
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt:`${message}`,
            max_tokens:150,
            temperature: 0.3,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,

        })
        await new Promise(resolve => setTimeout(resolve, 1000));

        res.json({message:response.data.choices[0].text})
    } catch (e) {
        console.log(e)
        res.send(e).status(400)
    }

})
