(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/affiliateTracking.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AFFILIATE_COOKIE",
    ()=>AFFILIATE_COOKIE,
    "getAttributionToken",
    ()=>getAttributionToken,
    "storeAttributionToken",
    ()=>storeAttributionToken
]);
/**
 * Affiliate atıf token'ının (apiv3 `AffiliateClick.click_uid`) tarayıcı tarafında
 * saklanması ve okunması.
 *
 * Neden cookie apiv3'e otomatik gitmiyor: cookie travelshopbooking.com alan adına
 * yazılır, apiv3 ise api.travelshopbooking.com'dadır; ayrıca tarayıcı istekleri
 * /api/apiv3 proxy'sinden geçer ve proxy cookie iletmez. Bu yüzden token'ı checkout
 * payload'ına `attribution_token` alanı olarak elle koyuyoruz.
 *
 * localStorage yedeği: Safari ITP, JS ile yazılan first-party cookie'yi 7 güne düşürür.
 * Yedek, cookie düştükten sonra da atıf penceresinin sonuna kadar token'ı korur.
 * (Kalıcı çözüm sunucu taraflı /go/{code} yönlendirmesi — sonraki faz.)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookies$2d$next$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookies-next/lib/index.js [app-client] (ecmascript)");
;
const AFFILIATE_COOKIE = "tsb_aff";
const STORAGE_KEY = "tsb_aff";
function storeAttributionToken(token, expiresAt) {
    const expires = expiresAt ? new Date(expiresAt) : null;
    const valid = expires && !Number.isNaN(expires.getTime()) ? expires : null;
    const maxAge = valid ? Math.max(0, Math.floor((valid.getTime() - Date.now()) / 1000)) : 60 * 60 * 24 * 30;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookies$2d$next$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(AFFILIATE_COOKIE, token, {
        maxAge,
        path: "/",
        sameSite: "lax",
        secure: ("TURBOPACK compile-time value", "object") !== "undefined" && window.location.protocol === "https:"
    });
    try {
        const payload = {
            t: token,
            e: Date.now() + maxAge * 1000
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch  {
    // Gizli mod / storage kapalı — cookie tek başına yeterli.
    }
}
function getAttributionToken() {
    const fromCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookies$2d$next$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCookie"])(AFFILIATE_COOKIE);
    if (typeof fromCookie === "string" && fromCookie) {
        return fromCookie;
    }
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return undefined;
        const parsed = JSON.parse(raw);
        if (!parsed?.t || typeof parsed.e !== "number" || parsed.e < Date.now()) {
            window.localStorage.removeItem(STORAGE_KEY);
            return undefined;
        }
        return parsed.t;
    } catch  {
        return undefined;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_affiliateTracking_ts_06qxi8fxlm8bv._.js.map