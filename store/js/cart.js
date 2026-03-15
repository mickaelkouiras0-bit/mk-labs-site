/* ================================================================
   MK LABS — Gestion du panier (localStorage)
   ================================================================ */

const CART_KEY = "mk_cart";

/* ---- Lecture / écriture ---- */
function cartGet() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function cartSave(items) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(items)); }
  catch {}
  cartUpdateBadge();
  window.dispatchEvent(new CustomEvent("mk:cart:change", { detail: { items } }));
}

/* ---- Actions ---- */
function cartAdd(productId, qty = 1) {
  const items = cartGet();
  const existing = items.find(i => i.id === productId);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, 1); // 1 max pour les ebooks
  } else {
    items.push({ id: productId, qty: 1 });
  }
  cartSave(items);
  return items;
}

function cartRemove(productId) {
  const items = cartGet().filter(i => i.id !== productId);
  cartSave(items);
  return items;
}

function cartClear() {
  cartSave([]);
}

function cartCount() {
  return cartGet().reduce((acc, i) => acc + i.qty, 0);
}

function cartTotal() {
  const items = cartGet();
  return items.reduce((acc, item) => {
    const p = getProductById(item.id);
    return acc + (p ? p.price * item.qty : 0);
  }, 0);
}

/* ---- UI badge ---- */
function cartUpdateBadge() {
  const count = cartCount();
  document.querySelectorAll(".cartBadge").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
  document.querySelectorAll(".cartCount").forEach(el => {
    el.textContent = count;
  });
}

/* ---- Bouton "Ajouter au panier" ---- */
function cartBindButton(btn, productId) {
  if (!btn) return;
  const items = cartGet();
  const inCart = items.some(i => i.id === productId);
  if (inCart) {
    btn.textContent = "✓ Dans le panier — Voir →";
    btn.classList.add("inCart");
    btn.onclick = () => { window.location.href = "panier.html"; };
  } else {
    btn.onclick = () => {
      cartAdd(productId);
      btn.textContent = "✓ Ajouté ! Voir le panier →";
      btn.classList.add("inCart");
      btn.onclick = () => { window.location.href = "panier.html"; };
      // Mini notification
      showCartToast();
    };
  }
}

/* ---- Toast notification ---- */
function showCartToast() {
  let toast = document.getElementById("cartToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cartToast";
    toast.className = "cartToast";
    document.body.appendChild(toast);
  }
  toast.textContent = "✓ Ajouté au panier";
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ---- Init au chargement ---- */
document.addEventListener("DOMContentLoaded", () => {
  cartUpdateBadge();
});
