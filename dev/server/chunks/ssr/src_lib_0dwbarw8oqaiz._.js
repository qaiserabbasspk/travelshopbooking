module.exports = [
"[project]/src/lib/affiliateTracking.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/src_lib_affiliateTracking_ts_0d5cduprzr8ed._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/affiliateTracking.ts [app-ssr] (ecmascript)");
    });
});
}),
"[project]/src/lib/apiClient.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/src/lib/apiClient.ts [app-ssr] (ecmascript)");
    });
});
}),
];