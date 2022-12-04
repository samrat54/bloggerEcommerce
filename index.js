const selectElement = document.getElementById('submit').addEventListener('click', () => {
    const thumbImg = document.getElementById('thumb_img')
    const thumbImgs = thumbImg.value;   
    const price = document.getElementById('price')
    const prices = price.value;   
    const small = document.getElementById('small')
    const smalls = small.value;    
    const medium = document.getElementById('medium')
    const mediums = medium.value;
    const large = document.getElementById('large')
    const larges = large.value;
    const extralarge = document.getElementById('extralarge')
    const extralarges = extralarge.value;

    const color1 = document.getElementById('color1')
    const color1s = color1.value;

    const color2 = document.getElementById('color2')
    const color2s = color2.value;

    const color3 = document.getElementById('color3')
    const color3s = color3.value;

    const color4 = document.getElementById('color4')
    const color4s = color4.value;

    const color5 = document.getElementById('color5')
    const color5s = color5.value;

    const dtls1 = document.getElementById('dtls1')
    const dtls1s = dtls1.value;

    const dtls2 = document.getElementById('dtls2')
    const dtls2s = dtls2.value;

    const dtls3 = document.getElementById('dtls3')
    const dtls3s = dtls3.value;

    const dtls4 = document.getElementById('dtls4')
    const dtls4s = dtls4.value;
    
    const result = document.getElementById('accept');
    result.textContent = `
    <div class="productPhoto">
    <!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 📷 Photo  --><br /><a
      href="${thumbImgs}"
      imageanchor="1"
      ><img
        border="0"
        src="${thumbImgs}"
        width="160"
        height="200"
        data-original-width="800"
        data-original-height="1000" /></a
    ><br /><!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ / 📷 Photo --><br />
  </div>
  <br />
  <div class="productDetail" data-stock="on">
    <br /><!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 🔖 Price --><br /><span
      itemprop="price"
      class="productPrice"
      data-discount-percent="0"
      >${prices}</span
    ><br /><br /><!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 💡 Option --><br />
    <ul
      id="Size"
      class="productOption"
    >
      <li>${smalls}</li>
      <li>${mediums}</li>
      <li>${larges}</li>
      <li>${extralarges}</li>
    </ul>
    <br /><!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 💡 Option --><br />
    <ul id="Color" class="productOption">
      <li>${color1s}</li>
      <li>${color2s}</li>
      <li>${color3s}</li>
      <li>${color4s}</li>
      <li>${color5s}</li>
    </ul>
    <br /><!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 💬 Detail Description--><br />
    <div class="detailDescription">
      <br /><b>Product Details</b><br /><br />
      <ul>
        <li>${dtls1s}</li>
        <li>${dtls2s}</li>
        <li>${dtls3s}</li>
        <li>${dtls4s}</li>
      </ul>
      <br /><small
        ><b>Disclaimer:</b> The color similarity of catalog photos with the original product reaches 98%. Lighting effects, brightness, density and screen resolution may cause color distortion.</small
      ><br /><br />
    </div>
    <!-- ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ / 💬 Detail Description--><br /><br />
  </div>
  
  
   
   
    `;
});