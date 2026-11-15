module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/apiv2/[...path]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 /*
 * apiv2 â†’ apiv3 taÅŸÄ±ma katmanÄ± iÃ§in proxy.
 *
 * TarayÄ±cÄ±da Ã§alÄ±ÅŸan ('use client') bileÅŸenler X-App-Token (sunucu sÄ±rrÄ±) gÃ¶nderemez.
 * Bu route handler, /api/apiv2/<path> isteklerini apiv3'Ã¼n /apiv2/<path> ucuna sunucu
 * tarafÄ±nda X-App-Token enjekte ederek iletir. Authorization (Bearer) varsa korunur.
 *
 * Sadece eski apiv2 client-side Ã§aÄŸrÄ±larÄ± (help-center, representative) bunu kullanÄ±r;
 * server-side servisler apiv3'e doÄŸrudan gider.
 */  // const BASE = process.env.NEXT_PUBLIC_APIV3_URL;
 // const APP_TOKEN = process.env.APIV3_APP_TOKEN as string;
 // async function forward(request: NextRequest, path: string[]) {
 //     const url = `${BASE}/apiv2/${path.join("/")}${request.nextUrl.search}`;
 //     const headers: Record<string, string> = {
 //         "X-App-Token": APP_TOKEN,
 //         "Content-Type": request.headers.get("content-type") || "application/json",
 //         "Content-Language": request.headers.get("content-language") || "en",
 //         Accept: "application/json",
 //     };
 //     const auth = request.headers.get("authorization");
 //     if (auth) headers["Authorization"] = auth;
 //     const init: RequestInit = { method: request.method, headers, cache: "no-store" };
 //     if (request.method !== "GET" && request.method !== "HEAD") {
 //         init.body = await request.text();
 //     }
 //     const res = await fetch(url, init);
 //     const body = await res.text();
 //     const responseHeaders: Record<string, string> = {
 //         "Content-Type": res.headers.get("content-type") || "application/json",
 //     };
 //     // Upstream'in Cache-Control'Ã¼nÃ¼ ilet â€” apiv3 hatalÄ± yanÄ±tlara (Ã¶r. tur detay 404)
 //     // `no-store` ekliyor; iletmezsek tarayÄ±cÄ± 404'Ã¼ heuristik cache'ler ve client
 //     // `force-cache` ile bayat 404 servis edilir.
 //     const cacheControl = res.headers.get("cache-control");
 //     if (cacheControl) responseHeaders["Cache-Control"] = cacheControl;
 //     return new NextResponse(body, {
 //         status: res.status,
 //         headers: responseHeaders,
 //     });
 // }
 // export async function GET(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
 //      const { path } = await context.params;return forward(request, params.path);
 // }
 // export async function POST(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
 //      const { path } = await context.params;return forward(request, params.path);
 // }
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f6f_3p-360st._.js.map