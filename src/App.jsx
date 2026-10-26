import React, { useReducer, useState, useEffect } from 'react';
import { postsReducer, initialState } from './reducer/postsReducer';
import { fetchPosts } from './api/postsApi';