import '../css/main.css'

import './filter.js'
import './mode.js'
import request from './request.js'
import { createCountries } from './updateUI.js'

const API = 'https://frontend-mentor-apis-6efy.onrender.com/countries'

request(API).then((data) => {
    createCountries(data)
}).catch((err) => {
   alert(err.message)
})