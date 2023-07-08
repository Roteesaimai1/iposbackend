/* const express = require('express')
const router = express.Router()
module.exports = router

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://fish-species.p.rapidapi.com/fish_api/fishes',
  headers: {
    'X-RapidAPI-Key': '85e894c68amsh22b9c98a5d756d1p127dcfjsn7b600e83ef60',
    'X-RapidAPI-Host': 'fish-species.p.rapidapi.com'
  }
};

let fishapi = null
async function fetchApi() {
try {
	const response = await axios.request(options);
	fishapi = response.data
  console.log('fishAPI: OK');
    
} catch (error) {
	console.error(error);
}
}
fetchApi()

router.get('/',  (req, res)=>{
   try {
    res.json(fishapi)
   }catch(error){
    console.error(error)
    res.status(500).json({ error: 'เกิดข้อผิดพลาดในการเรียก API' });
   }
    
})
 */