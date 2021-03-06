/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   20-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: discoverSelector.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

import { createSelector } from 'reselect';

const discoverAuthorStoreData = (state) => state.DiscoverAuthorStoreData;
const discoverListStoreData = (state) => state.DiscoverListStoreData;
const discoverAtcStoreData = (state) => state.DiscoverAtcStoreData;

////////////// author //////////////////
///
export const getAuthorFetchStatus = createSelector(
    discoverAuthorStoreData,
    (data) => data.isFetching
);
export const getDiscoverAuthorContent = createSelector(
    discoverAuthorStoreData,
    (data) => data.content
);

//////////// list //////////////////////
///
export const getListFetchStatus = createSelector(
    discoverListStoreData,
    (data) => data.isFetching
);
export const getDiscoverListContent = createSelector(
    discoverListStoreData,
    (data) => data.content
);


///////////// atc ////////////////////////
///
export const getAtcListFetchStatus = createSelector(
    discoverAtcStoreData,
    (data) => data.isFetching
);

export const getAtcListContent = createSelector(
    discoverAtcStoreData,
    (data) => data.content
);
