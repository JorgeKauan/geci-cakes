/* ===== DADOS EDITÁVEIS =====
   FOTOS: coloque o arquivo na pasta /fotos (nome sem espaços nem acentos) e escreva o caminho em "src".
   Se "src" estiver vazio ou o arquivo não for encontrado, aparece um espaço reservado (sem ícone quebrado)
   e o console do navegador (F12) mostra qual arquivo faltou. */
const WA = "5585981795641";
const wa = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

/* ABA BOLOS: "src" = foto do card, "alt" = descrição da foto */
const CATS = [
    { src: "fotos/bolo-de-aniversario.jpg", alt: "Bolo de aniversário branco com bordas e corações bordô", n: "Bolos de aniversário", d: "Decorações para tornar o parabéns inesquecível.", m: "um bolo de aniversário personalizado" },
    { src: "fotos/bolo-infantil.jpg", alt: "Bolo infantil de dois andares com personagens e arco-íris", n: "Bolos infantis", d: "Cores e temas pensados para a festa das crianças.", m: "um bolo infantil" },
    { src: "fotos/bolo-laco-dourado.jpg", alt: "Bolo branco com laços dourados e pequenos corações", n: "Bolos delicados", d: "Acabamentos suaves, com flores e chantininho.", m: "um bolo delicado" },
    { src: "fotos/bolo-com-nome.jpg", alt: "Bolo personalizado com nome e topo de bolo", n: "Bolos personalizados", d: "Nomes, números e temas do jeito que você imaginar.", m: "um bolo personalizado com nome ou tema" },
    { src: "fotos/bolo-comemorativo.jpg", alt: "Bolo branco com flores vermelhas pintadas e o número 25", n: "Comemorações especiais", d: "Para celebrar datas importantes com sabor.", m: "um bolo para uma comemoração especial" }
];

/* ABA DOCES e ABA SALGADOS: itens citados pela confeitaria como exemplos. Inclua ou remova itens conforme o que for oferecido. */
const DOCES = [
    { src: "fotos/Donuts Decorados em Meio à Natureza.jpg", alt: "Bomba de chocolate", n: "Donuts Decorados", d: "Para quem não resiste a um doce de chocolate.", m: "bomba de chocolate", cta: "Quero consultar" },
    { src: "fotos/bolo-de-milho.jpg", alt: "Fatias de bolo de milho retiradas do bolo inteiro", n: "Pedaços de bolo", d: "Pedaços de bolo vendidos à parte, sem precisar encomendar um bolo inteiro.", m: "pedaços de bolo à parte", cta: "Quero consultar" },
    //{ src: "fotos/bolo-infantil-2.jpg", alt: "Fatias de bolo de milho retiradas do bolo inteiro", n: "Pedaços de bolo", d: "Pedaços de bolo vendidos à parte, sem precisar encomendar um bolo inteiro.", m: "pedaços de bolo à parte", cta: "Quero consultar" }
];
const SALGADOS = [
    { src: "fotos/Pizza Recheada com Queijo Derretido.jpg", alt: "Pizza", n: "Pizzas", d: "Uma Pizza de queijo maravilhosa.", m: "pizza", cta: "Quero consultar" },
    { src: "fotos/Salgadinhos.jpg", alt: "Kit mini salgadinhos para festas", n: "Kit Salgados para festas", d: "Salgado para servir junto com o bolo.", m: "kit salgado", cta: "Quero consultar" },
    { src: "fotos/esfirras.jpg", alt: "Esfirras", n: "Esfirras", d: "Deliciosas esfirras.", m: "esfirra", cta: "Quero consultar" }
];

/* CARROSSÉIS: pode ter quantas fotos quiser em cada um. Trocam sozinhos a cada ~4 segundos. */
const SLIDES = {
    hero: [
        { src: "fotos/bolo-de-morango.jpg", alt: "Bolo branco com morangos na cobertura e raspas vermelhas na lateral" },
        { src: "fotos/bolo-infantil.jpg", alt: "Bolo infantil de dois andares com personagens e arco-íris" },
        { src: "fotos/bolo-de-chocolate.jpg", alt: "Bolo de chocolate decorado com rosetas" }
    ],
    about: [
        { src: "fotos/bolo-rosas-bordo.jpg", alt: "Bolo branco com rosas de chantininho em tons de vinho" },
        { src: "fotos/bolo-infantil-2.jpg", alt: "Bolo infantil de dois andares com tema fundo do mar" },
        { src: "fotos/bolo-laco-dourado.jpg", alt: "Bolo branco com laços dourados" }
    ]
};

/* GALERIA: "r" = proporção da foto (largura/altura) para o mosaico não cortar a imagem; "t" = nome mostrado ao ampliar */
const GAL = [
    { src: "fotos/bolo-de-aniversario.jpg", alt: "Bolo de aniversário branco com bordas e corações bordô e a frase Happy Birthday", t: "Bolo de aniversário", r: "1200/1600" },
    { src: "fotos/bolo-infantil-2.jpg", alt: "Bolo infantil de dois andares com tema fundo do mar", t: "Bolo infantil", r: "466/600" },
    { src: "fotos/bolo-com-nome.jpg", alt: "Bolo personalizado com nome e topo de bolo", t: "Bolo com nome", r: "464/602" },
    { src: "fotos/bolo-rosas-bordo.jpg", alt: "Bolo branco com rosas de chantininho em tons de vinho", t: "Bolo com rosas", r: "1199/1713" },
    { src: "fotos/bolo-de-milho.jpg", alt: "Bolo de milho com fatias cortadas", t: "Bolo de milho", r: "1199/1495" },
    { src: "fotos/bolo-infantil.jpg", alt: "Bolo infantil de dois andares com personagens e arco-íris", t: "Bolo infantil temático", r: "630/857" },
    { src: "fotos/bolo-de-chocolate.jpg", alt: "Bolo de chocolate decorado com rosetas", t: "Bolo de chocolate", r: "1080/1017" },
    { src: "fotos/bolo-comemorativo.jpg", alt: "Bolo branco com flores vermelhas pintadas e o número 25", t: "Bolo comemorativo", r: "736/805" },
    { src: "fotos/bolo-laco-dourado.jpg", alt: "Bolo branco com laços dourados e pequenos corações", t: "Bolo com laços dourados", r: "463/555" },
    { src: "fotos/bolo-de-morango.jpg", alt: "Bolo branco com morangos na cobertura", t: "Bolo de morango", r: "600/1067" }
];

/* ===== CÓDIGO (não precisa mexer daqui para baixo) ===== */
const hue = i => { const a = [[345, 330], [20, 350], [40, 200], [330, 300], [355, 25]][i % 5]; return `--h1:hsl(${a[0]} 70% 92%);--h2:hsl(${a[1]} 65% 80%)` };
const ph = (o, i, label, eager) => o && o.src
    ? `<img src="${o.src}" alt="${o.alt || label || ""}" loading="${eager ? "eager" : "lazy"}" decoding="async">`
    : `<div class="ph" style="${hue(i)}" role="img" aria-label="${(o && o.alt) || label || "Foto do bolo"}"><svg><use href="#ck"/></svg><span>Foto do bolo (substituir)</span></div>`;

/* Foto não encontrada: troca pelo espaço reservado e avisa no console (F12) qual arquivo faltou */
addEventListener("error", e => {
    const t = e.target; if (!t || t.tagName !== "IMG") return;
    console.warn("Foto não encontrada:", t.getAttribute("src"), "(confira o nome do arquivo na pasta fotos/)");
    t.outerHTML = ph(null, 0, t.alt)
}, true);

document.querySelectorAll("[data-wa]").forEach(a => a.href = wa(a.dataset.wa));

/* Abas Bolos / Doces / Salgados */
const renderCats = L => document.getElementById("cats").innerHTML = L.map((c, i) => `<article class="card"><div class="im">${ph(c.src ? { src: c.src, alt: c.alt || c.n } : null, i, c.n)}</div><div class="tx"><h3>${c.n}</h3><p>${c.d}</p><a href="${wa(`Olá! Vi o site da Geci Cakes e gostaria de saber mais sobre ${c.m}.`)}" target="_blank" rel="noopener" aria-label="${c.cta || "Quero um bolo assim"}: ${c.n} (abre o WhatsApp)">${c.cta || "Quero um bolo assim"}</a></div></article>`).join("");
const SETS = { bolos: CATS, doces: DOCES, salgados: SALGADOS };
const tabs = [...document.querySelectorAll(".tabs [data-tab]")];
const pickTab = k => { tabs.forEach(b => { const on = b.dataset.tab === k; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1 }); document.getElementById("cats").setAttribute("aria-labelledby", "t-" + k); renderCats(SETS[k]) };
tabs.forEach(b => { b.onclick = () => pickTab(b.dataset.tab); b.onkeydown = e => { const i = tabs.indexOf(b), n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null; if (n !== null) { const t = tabs[(n + tabs.length) % tabs.length]; t.focus(); pickTab(t.dataset.tab) } } });
document.querySelectorAll("[data-go]").forEach(a => a.addEventListener("click", () => pickTab(a.dataset.go)));
pickTab("bolos");

/* Carrosséis (primeira tela e seção "sobre") com troca automática */
document.querySelectorAll("[data-car]").forEach((root, ci) => {
    const L = SLIDES[root.dataset.car];
    root.innerHTML = `<div class="car" role="region" aria-roledescription="carousel" aria-label="Fotos de bolos"><div class="tr" tabindex="0">${L.map((s, i) => `<div class="sl" role="group" aria-roledescription="slide" aria-label="${i + 1} de ${L.length}">${ph(s, i + ci * 2, "", ci === 0 && i === 0)}</div>`).join("")}</div></div>`;
    const tr = root.querySelector(".tr");
    const smooth = matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth";
    const cur = () => Math.round(tr.scrollLeft / tr.clientWidth);
    const go = i => tr.scrollTo({ left: tr.clientWidth * ((i + L.length) % L.length), behavior: smooth });
    tr.addEventListener("keydown", e => { if (e.key === "ArrowRight") go(cur() + 1); if (e.key === "ArrowLeft") go(cur() - 1) });
    /* Rotação automática: pausa durante o toque e fica desligada se o sistema pedir menos movimento */
    if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
        let hold = false;
        tr.addEventListener("touchstart", () => hold = true, { passive: true });
        tr.addEventListener("touchend", () => hold = false);
        setInterval(() => { if (!hold && !document.hidden) go(cur() + 1) }, 4000 + ci * 800);
    }
});

/* Galeria, miniaturas do Instagram e janela de ampliação */
const grid = document.getElementById("grid");
grid.innerHTML = GAL.map((g, i) => `<button class="it rv" style="--r:${g.r}" data-i="${i}" aria-label="Ampliar: ${g.alt}">${ph(g, i)}</button>`).join("");
document.getElementById("mini").innerHTML = GAL.slice(0, 6).map((g, i) => `<div>${ph(g, i + 2)}</div>`).join("");
const dlg = document.getElementById("dlg");
grid.addEventListener("click", e => {
    const b = e.target.closest(".it"); if (!b) return; const g = GAL[b.dataset.i];
    dlg.style.setProperty("--r", g.r); document.getElementById("dm").style.setProperty("--r", g.r);
    document.getElementById("dm").innerHTML = ph(g, +b.dataset.i, "", true); document.getElementById("dc").textContent = g.t;
    document.getElementById("dw").href = wa(`Olá! Vi o site da Geci Cakes e gostaria de saber mais sobre algo parecido com: ${g.t}.`); dlg.showModal()
});
document.getElementById("dx").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close() });

/* Menu, rodapé e formulário */
const nav = document.getElementById("nav"), bg = document.getElementById("burger");
bg.onclick = () => { const o = nav.classList.toggle("open"); bg.setAttribute("aria-expanded", o) };
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); bg.setAttribute("aria-expanded", false) } });
document.getElementById("yr").textContent = new Date().getFullYear();
const f = document.getElementById("f");
f.addEventListener("submit", e => {
    e.preventDefault(); let ok = true;
    f.querySelectorAll("[required]").forEach(i => { const bad = !i.value.trim(); i.setAttribute("aria-invalid", bad); i.nextElementSibling.textContent = bad ? "Preencha este campo." : ""; if (bad) ok = false });
    if (!ok) { f.querySelector("[aria-invalid=true]").focus(); return }
    const d = new FormData(f), dt = d.get("data").split("-").reverse().join("/");
    let m = `Olá! Gostaria de solicitar um orçamento para um bolo personalizado.\n\nNome: ${d.get("nome")}\nComemoração: ${d.get("tipo")}\nData desejada (sujeita à confirmação): ${dt}\nDescrição do bolo: ${d.get("desc")}`;
    if (d.get("conv")) m += `\nConvidados (aprox.): ${d.get("conv")}`;
    m += "\n\nPoderia me orientar sobre as opções disponíveis?";
    window.open(wa(m), "_blank", "noopener")
});
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("on"); io.unobserve(x.target) } }), { threshold: .12 }) : null;
document.querySelectorAll(".rv").forEach(e => io ? io.observe(e) : e.classList.add("on"));
