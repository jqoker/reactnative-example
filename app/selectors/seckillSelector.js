/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   20-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: seckillSelector.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

import { createSelector } from 'reselect';

const seckillStoreData = (state) => state.SeckillStoreData;

export const getFetchStatus = createSelector(
    seckillStoreData,
    (data) => data.isFetching
);

export const getSeckillItems = createSelector(
    seckillStoreData,
    (data) => data.items
);


// export const getFetchStatusAndSeckillItems = createSelector(
//     seckillStoreData,
//     (data) => ({isFetching: data.isFetching, items: data.items})
// );
