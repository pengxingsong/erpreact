import React, { Component } from 'react';
import axios from 'axios';

export default {
    sum(a, b) {
      return a + b;
    },
    fetchUser() {
        return axios.get('http://jsonplaceholder.typicode.com/users/1')
          .then(res => res.data)
          .catch(error => console.log(error));
      }
  }