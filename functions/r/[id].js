// 短链落地：/r/{编号}?pan=quark|baidu
// 有推广链接 → 302 过去；没有 → 显示分享链接和口令的中间页
import DB from "../links.json";

const PAGE = (title, code, summary, rows) => `<!doctype html>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<body style="font-family:system-ui,-apple-system,'Microsoft YaHei',sans-serif;background:#12141a;color:#e6e9ef;padding:40px 24px;line-height:1.8">
<div style="max-width:560px;margin:0 auto">
<div style="font-size:12px;color:#5f6672;letter-spacing:.5px;margin-bottom:6px">资源编号 ${code}</div>
<h2 style="margin:0 0 6px;font-size:22px">${title}</h2>
<p style="color:#8a94a6;margin:0 0 26px;font-size:14px">${summary}</p>
<table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
<hr style="border:none;border-top:1px solid #232936;margin:26px 0">
<p style="color:#5f6672;font-size:12.5px;margin:0">复制口令后打开夸克 App 会自动识别。</p>
</div></body>`;

export async function onRequestGet({ params, request }) {
  const id = params.id;
  const pan = (new URL(request.url).searchParams.get("pan") || "quark").toLowerCase();
  const e = DB[id];
  if (!e) return new Response("资源不存在", { status: 404 });

  const pick = e[pan] || e.quark || e.baidu;
  if (pick && pick.promo) return Response.redirect(pick.promo, 302);

  const row = (label, obj) => {
    if (!obj || (!obj.share && !obj.passcode)) return "";
    return `<tr><td style="padding:10px 0;color:#8a94a6;vertical-align:top">${label}</td>
      <td style="padding:10px 0">${obj.share ? `<a style="color:#5dcaa5" href="${obj.share}">${obj.share}</a>` : ""}
      ${obj.passcode ? `<div style="color:#8a94a6;font-size:13px">口令／提取码：<code style="background:#1d2330;padding:3px 8px;border-radius:5px;color:#e8ecf3">${obj.passcode}</code></div>` : ""}</td></tr>`;
  };
  const rows = row("夸克网盘", e.quark) + row("百度网盘", e.baidu) ||
    '<tr><td style="color:#8a94a6">资源已在整理中，稍后再来。</td></tr>';
  return new Response(PAGE(e.title, id, e.summary || "", rows), {
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
  });
}
