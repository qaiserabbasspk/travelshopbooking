module.exports = [
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/services/blog.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/services/locations.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00705fb614ebfa62b7f3b00804c1f6e0305d8bf7e0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"],
    "00a8560f3f50dab30b6c93476914a97fec9b917e67",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMe"],
    "00f447053bc9629be9857ffdc0a7a080c0579e87f7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "4094f40c810e6ffd7f81215ece49cb3e052143497f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPostDetails"],
    "40be12891090073722622d5408b8c49c88d291f184",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPosts"],
    "40c4f3b5030e1793837cd575ef751f6768b296913e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchBar"],
    "6044f99a1f0dbf5f61a04595b13766fde1b678570e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPostsByLocation"],
    "7079529721546b9c9b6de9261c08580e3f5b7081d4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loginAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$services$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/search.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/services/blog.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/services/locations.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locations.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/search.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/services/blog.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/services/locations.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blog.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locations.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/src/actions/search.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40c4f3b5030e1793837cd575ef751f6768b296913e":{"name":"searchBar"},"40c61f7b1dd0c23dea08462ec959ee9c1055c77778":{"name":"searchTourCategories"}},"src/actions/search.ts",""] */ __turbopack_context__.s([
    "searchBar",
    ()=>searchBar,
    "searchTourCategories",
    ()=>searchTourCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function searchBar(term) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIV3_URL}/tour-categories/search-bar?term=${encodeURIComponent(term)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-App-Token": process.env.APIV3_APP_TOKEN ?? ""
            },
            cache: "no-store"
        });
        if (!res.ok) {
            return {
                error: `API error: ${res.status}`
            };
        }
        return await res.json();
    } catch  {
        return {
            error: "Request failed"
        };
    }
}
async function searchTourCategories(term) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIV3_URL}/tour-categories/search?term=${encodeURIComponent(term)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-App-Token": process.env.APIV3_APP_TOKEN ?? ""
            },
            cache: "no-store"
        });
        if (!res.ok) {
            return {
                error: `API error: ${res.status}`
            };
        }
        return await res.json();
    } catch  {
        return {
            error: "Request failed"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    searchBar,
    searchTourCategories
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(searchBar, "40c4f3b5030e1793837cd575ef751f6768b296913e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(searchTourCategories, "40c61f7b1dd0c23dea08462ec959ee9c1055c77778", null);
}),
"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"005d582daf170ce9f6c7745604a83eb61ebe68d96e":{"name":"adminLogoutAction"},"008d4c667aa7af1c57aba4df0023681f9b25714369":{"name":"getAdminToken"},"00a8560f3f50dab30b6c93476914a97fec9b917e67":{"name":"getMe"},"6015fad4b4772cfdf89c223e032486e7afa7677729":{"name":"adminLoginAction"},"7079529721546b9c9b6de9261c08580e3f5b7081d4":{"name":"loginAction"}},"src/app/actions/auth.ts",""] */ __turbopack_context__.s([
    "adminLoginAction",
    ()=>adminLoginAction,
    "adminLogoutAction",
    ()=>adminLogoutAction,
    "getAdminToken",
    ()=>getAdminToken,
    "getMe",
    ()=>getMe,
    "loginAction",
    ()=>loginAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
/**
 * B2C login: the apiv3 `/auth/login` call is made on the SERVER because:
 *  - X-App-Token is a private server secret (APIV3_APP_TOKEN, not NEXT_PUBLIC);
 *    it must never be sent from the client.
 *  - The audience (role) gate is applied here, so a rejected user never
 *    receives a token.
 *
 * apiv3 returns `{ token (Sanctum), token_old (api_token), user }`. The client
 * writes the cookies (most legacy calls are made from the client with
 * api_token, so the token has to be returned to the client).
 */ // The main site audience is CUSTOMER only. Operator and blogger panels moved to
// business (see lib/partnerLinks); those accounts are rejected here with a
// `reason`, and the screen redirects them to the panel.
const DEFAULT_ALLOWED_ROLES = [
    "customer"
];
async function loginAction(email, password, allowedRoles = DEFAULT_ALLOWED_ROLES) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIV3_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-App-Token": process.env.APIV3_APP_TOKEN ?? ""
            },
            body: JSON.stringify({
                email,
                password
            }),
            cache: "no-store"
        });
        if (!res.ok) return {
            ok: false,
            reason: "invalid"
        };
        const data = await res.json();
        const roles = Array.isArray(data?.user?.roles) ? data.user.roles : [];
        if (roles.includes("operator")) return {
            ok: false,
            reason: "operator"
        };
        if (roles.includes("blogger")) return {
            ok: false,
            reason: "blogger"
        };
        const allowed = roles.some((r)=>allowedRoles.includes(r));
        if (!data?.token || !allowed) return {
            ok: false,
            reason: "role"
        };
        return {
            ok: true,
            token: data.token,
            token_old: data.token_old,
            user: data.user
        };
    } catch  {
        return {
            ok: false
        };
    }
}
async function getMe() {
    const v3 = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get("auth-token-v3")?.value;
    if (!v3) return null;
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIV3_URL}/auth/me`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${v3}`
            },
            cache: "no-store"
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data?.user ?? null;
    } catch  {
        return null;
    }
}
async function adminLoginAction(username, password) {
    const base = process.env.ADMIN_API_URL ?? "http://localhost:3000";
    let res;
    try {
        res = await fetch(`${base}/api/v1/administrator/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                username,
                password
            }),
            cache: "no-store"
        });
    } catch (err) {
        console.error("Admin login: API unreachable:", err);
        return {
            ok: false,
            reason: "unreachable",
            message: "Could not reach the authentication server."
        };
    }
    const raw = await res.text();
    let json = null;
    try {
        json = raw ? JSON.parse(raw) : null;
    } catch  {
        json = null;
    }
    if (!res.ok) {
        console.error("Admin login failed:", res.status, raw.slice(0, 300));
        if ([
            400,
            401,
            403,
            404,
            422
        ].includes(res.status)) {
            return {
                ok: false,
                reason: "invalid",
                message: json?.message ?? "Invalid username or password."
            };
        }
        return {
            ok: false,
            reason: "error",
            message: json?.message ?? `Login failed (HTTP ${res.status}).`
        };
    }
    // ---- Adjust this block if your response shape is different ----
    const root = json?.data ?? json ?? {};
    const token = root?.token ?? root?.access_token ?? root?.accessToken ?? json?.token ?? json?.access_token ?? json?.accessToken;
    const u = root?.user ?? root?.administrator ?? root?.admin ?? root?.profile ?? {};
    // ---------------------------------------------------------------
    if (!token) {
        console.error("Admin login: no token in response:", raw.slice(0, 300));
        return {
            ok: false,
            reason: "error",
            message: "Login succeeded but no token was returned."
        };
    }
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set("admin-token", token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 8
    });
    const rawRole = Array.isArray(u?.roles) ? u.roles[0] : u?.role;
    return {
        ok: true,
        user: {
            id: String(u?.id ?? ""),
            name: u?.name ?? u?.full_name ?? u?.username ?? username,
            email: u?.email ?? username,
            role: typeof rawRole === "string" ? rawRole : rawRole?.name ?? "admin"
        }
    };
}
async function getAdminToken() {
    return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get("admin-token")?.value ?? null;
}
async function adminLogoutAction() {
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete("admin-token");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAction,
    getMe,
    adminLoginAction,
    getAdminToken,
    adminLogoutAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAction, "7079529721546b9c9b6de9261c08580e3f5b7081d4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMe, "00a8560f3f50dab30b6c93476914a97fec9b917e67", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminLoginAction, "6015fad4b4772cfdf89c223e032486e7afa7677729", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAdminToken, "008d4c667aa7af1c57aba4df0023681f9b25714369", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminLogoutAction, "005d582daf170ce9f6c7745604a83eb61ebe68d96e", null);
}),
"[project]/src/lib/apiv3.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * apiv3 (Laravel 13) için merkezi B2C fetch yardımcısı.
 *
 * Tüm `b2c.php` uçları `X-App-Token` (server-side gizli token) ister; bu helper
 * base URL + token + ortak header'ları tek yerde toplar. Legacy api'de her serviste
 * tekrarlanan inline fetch'in temiz karşılığı.
 *
 * `Response` döndürür: her çağıran kendi `res.ok` / `res.json()` / 404 davranışını
 * korur (bazı uçlar 404'te null döner). Yalnızca GET (B2C okuma) içindir.
 */ __turbopack_context__.s([
    "apiv3Get",
    ()=>apiv3Get
]);
function apiv3Get(path, opts = {}) {
    const base = process.env.NEXT_PUBLIC_APIV3_URL ?? "";
    const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;
    return fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Language": "en",
            "Content-type": "application/json",
            "X-App-Token": process.env.APIV3_APP_TOKEN ?? "",
            ...opts.headers
        },
        ...opts.cache ? {
            cache: opts.cache
        } : {},
        ...opts.revalidate !== undefined ? {
            next: {
                revalidate: opts.revalidate
            }
        } : {}
    });
}
}),
"[project]/src/services/blog.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00705fb614ebfa62b7f3b00804c1f6e0305d8bf7e0":{"name":"getCategories"},"4094f40c810e6ffd7f81215ece49cb3e052143497f":{"name":"getPostDetails"},"40be12891090073722622d5408b8c49c88d291f184":{"name":"getBlogPosts"},"6044f99a1f0dbf5f61a04595b13766fde1b678570e":{"name":"getPostsByLocation"}},"src/services/blog.ts",""] */ __turbopack_context__.s([
    "getBlogPosts",
    ()=>getBlogPosts,
    "getCategories",
    ()=>getCategories,
    "getPostDetails",
    ()=>getPostDetails,
    "getPostsByLocation",
    ()=>getPostsByLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiv3$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiv3.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getBlogPosts({ page = 1, limit = 12, search = "", category = "", author_id = "", sort = "newest" }) {
    const query = new URLSearchParams();
    query.set("limit", String(limit));
    query.set("page", String(page));
    if (search) query.set("search", search);
    if (category) query.set("category", category);
    if (author_id) query.set("author_id", String(author_id));
    query.set("sort", sort || "newest");
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiv3$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiv3Get"])(`/blog/posts?${query.toString()}`, {
        revalidate: 0
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}
async function getCategories() {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiv3$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiv3Get"])("/blog/categories");
    if (!res.ok) throw new Error("Failed to fetch data");
    const json = await res.json();
    return json.data ?? [];
}
async function getPostDetails(slug) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiv3$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiv3Get"])(`/blog/posts/${slug}`, {
        revalidate: 300
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? null;
}
async function getPostsByLocation(locationId, limit = 6) {
    if (!locationId) return [];
    try {
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiv3$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiv3Get"])(`/blog/posts/by-location?locationId=${locationId}&limit=${limit}`, {
            revalidate: 3600
        });
        if (!res.ok) return [];
        const json = await res.json();
        return json.data ?? [];
    } catch  {
        // Blog bloğu yan içerik — hatası kategori sayfasını düşürmemeli.
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBlogPosts,
    getCategories,
    getPostDetails,
    getPostsByLocation
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBlogPosts, "40be12891090073722622d5408b8c49c88d291f184", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCategories, "00705fb614ebfa62b7f3b00804c1f6e0305d8bf7e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPostDetails, "4094f40c810e6ffd7f81215ece49cb3e052143497f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPostsByLocation, "6044f99a1f0dbf5f61a04595b13766fde1b678570e", null);
}),
"[project]/src/services/locations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00f447053bc9629be9857ffdc0a7a080c0579e87f7":{"name":"default"},"407e9c21581eeccecf8a632b9591eef045c8c104ff":{"name":"getCities"}},"src/services/locations.ts",""] */ __turbopack_context__.s([
    "default",
    ()=>getLocations,
    "getCities",
    ()=>getCities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiv3$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apiv3.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getLocations() {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiv3$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiv3Get"])("/countries", {
        cache: "force-cache"
    });
    const json = await res.json();
    return json.data ?? [];
}
async function getCities(countryId) {
    if (!countryId) return [];
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apiv3$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiv3Get"])(`/countries/${countryId}/cities`, {
        cache: "force-cache"
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? [];
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getLocations,
    getCities
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLocations, "00f447053bc9629be9857ffdc0a7a080c0579e87f7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCities, "407e9c21581eeccecf8a632b9591eef045c8c104ff", null);
}),
];

//# sourceMappingURL=_1w4zr6e6o3-c9._.js.map