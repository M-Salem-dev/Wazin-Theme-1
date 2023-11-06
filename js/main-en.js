// window.alert("Hi...");
// ===================================================================================================================================================================
// scroll To Profile

// spinners
$(document).ready(function () {
  $("#loading").fadeOut(4000, function () {
    $("body").css("overflow-y", "auto");
  });

  $(".box-btn-Profile-icon .nav-link").click(function () {
    // console.log("ccccccccccc");

    $("html, body").animate(
      {
        scrollTop: $("#link-page-home-Present").offset().top,
      },
      10
    );
  });

  // ===============================================================
  // Navbar

  $(".menu-item").click(function () {
    $(".sub-menu-dropdown").slideToggle(1000);
  });

  //
  // =====================================================================================================
  // Scroll cart and Profile

  //
  // let footerScrool = $(".box-all-footer").offset().top;
  // var wstick1 = $(window);
  // wstick1.on("scroll", function () {
  //   var scroll2 = wstick1.scrollTop();
  //   if (scroll2 < footerScrool) {
  //     $(".hid-in-footer").hide(1000);

  //   } else {
  //     $(".hid-in-footer").show(1000);
  //   }
  // });

  $(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    let footerScrool = $(".box-all-footer").offset().top; // تحديث قيمة footerScrool داخل التابع

    if (wScroll > footerScrool + 500) {
      // $(".hid-in-footer").css("backgroundColor", "#00f");
      $(".hid-in-footer").fadeOut(1000);
    } else {
      // $(".hid-in-footer").css("backgroundColor", "#ff0");
      $(".hid-in-footer").fadeIn(1000);
    }
  });

  // =====================================================================================================
  // Navbar
  var wstick = $(window);
  wstick.on("scroll", function () {
    var scroll = wstick.scrollTop();
    if (scroll < 50) {
      $("#box-nav-fixed").removeClass("sticky");
    } else {
      $("#box-nav-fixed").addClass("sticky");
    }
  });

  // -------------------------------------------
  // maunn

  $(".maunn").click(function () {
    this.classList.toggle("is-active");
  });

  $(document).ready(function () {
    $(".mun-align").click(function () {
      $(".box-cilsh-nav").toggleClass("active");
      // $(window.alert('lskclfsjk'))
    });
  });

  // ------------------------------------------------
  // search

  // ------------------------------------------------
  // Personal

  $(".box-nav-icon-img").click(function () {
    $(".box-dropdown").slideToggle(500); // لو مخفي بظهر و لو ظهر بيختفي

    $boxFormNav.slideUp(600);
    // $(".box-language").slideUp(600);
  });
  //---------------------------------------------------
  // style
  var mainColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--mainColor"
  );

  // استخدام المتغير في تغيير لون النص عند mouseover
  // $(".Link-nav").mouseover(function() {
  //   $(this).css("color", mainColor);
  // });

  // // استخدام المتغير في إعادة لون النص إلى الحالة الافتراضية عند mouseout
  // $(".Link-nav").mouseout(function() {
  //   $(this).css("color", ""); // سيعيد هذا اللون إلى القيمة الافتراضية المحددة في النمط
  // });

  // -------------------------------------
  // language

  $(".language-nav").click(function () {
    // $(".box-language").slideToggle(500);

    $(".box-dropdown").slideUp(600); // لو مخفي بظهر و لو ظهر بيختفي

    $boxFormNav.slideUp(600);
  });
  // -----------------------------------------------

  // =====================================================================================================

  $(document).ready(function () {
    $(".your-Offers").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 300,
      dots: true,
      infinite: true,
      speed: 2000,
      dots: true,

      // rtl

      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            // variableWidth: true,
            centerPadding: "15%",
          },
        },
      ],
    });
  });
  // =====================================================================================================

  $(document).ready(function () {
    $(".your-Categories").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 300,
      arrows: false,
      infinite: true,
      speed: 2000,
      // dots: true,

      // rtl

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            // variableWidth: true,
            centerPadding: "15%",
          },
        },
      ],
    });
  });

  // =====================================================================================================

  $(document).ready(function () {
    $(".your-Feedback").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      autoplay: true,
    });
  });

  $(document).ready(function () {
    $(".your-Services").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 300,
      dots: false,
      infinite: false,
      speed: 2000,
      dots: false,
      // rtl: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            arrows: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            arrows: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            // variableWidth: true,
            centerPadding: "15%",
            autoplay: true,
            infinite: true,
            arrows: true,
            dots: true,
          },
        },
      ],
    });
  });
  // =====================================================================================================
  // progress

  const calcScrollValue = () => {
    const btn = document.querySelector("#progress");
    const btnContent = document.querySelector("#progress-value");

    const position = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round(Math.floor(position * 100) / calcHeight);

    position > 100
      ? (btn.style.display = "grid")
      : (btn.style.display = "none");

    btn.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    btn.style.background = `conic-gradient(${mainColor} ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

    // btnContent.textContent = `${scrollValue}%`;
  };

  window.addEventListener("scroll", calcScrollValue);

  // =====================================================================================================
  // icon cart
  $(document).ready(function () {
    $(".btn-cart,.btn-add-to-cart").click(function () {
      var icon = $(this).find("i");
      if (icon.hasClass("fa-cart-shopping")) {
        icon.removeClass("fa-cart-shopping").addClass("fa-cart-circle-check");
      } else {
        icon.removeClass("fa-cart-circle-check").addClass("fa-cart-shopping");
      }
    });
  });
  $(document).ready(function () {
    $(".btn-cart,.btn-add-to-cart").hover(
      function () {
        var icon = $(this).find("i.fa-cart-shopping");
        // icon.css("color", "red"); /* تغيير لون الأيقونة */
        icon.css("transform", "scale(1.2)"); /* تغيير حجم الأيقونة */
        /* يمكنك إضافة المزيد من الخصائص حسب رغبتك لتغيير شكل الأيقونة */
      },
      function () {
        var icon = $(this).find("i.fa-cart-shopping");
        icon.css("color", ""); /* استعادة اللون الافتراضي */
        icon.css("transform", ""); /* استعادة الحجم الافتراضي */
      }
    );
  });

  // =====================================================================================================
  // Login / code

  // JavaScript
  // document.addEventListener("DOMContentLoaded", function () {
  //   var codeSection = document.getElementById("code");
  //   var loginSection = document.getElementById("login");
  //   var submitBtnPhone = document.getElementById("submitBtnPhone");
  //   var submitBtnCode = document.getElementById("submitBtnCode");

  //   codeSection.style.display = "none";

  //   submitBtnPhone.addEventListener("click", function () {
  //     loginSection.style.display = "none";

  //     codeSection.style.display = "block";
  //   });

  //   submitBtnCode.addEventListener("click", function () {
  //     loginSection.style.display = "block";

  //     codeSection.style.display = "none";
  //   });
  // });

  // ------------------------
  // jquery
  $(document).ready(function () {
    $("#code").hide();

    $("#submitBtnPhone").click(function () {
      $("#login").hide();
      $("#code").show();
    });

    $("#submitBtnCode").click(function () {
      $("#login").show();
      $("#code").hide();
    });
  });

  /* =================================================================================================================================== */
  /* Product details */
  // zoom img

  // ====================================================================================================================================
  // abb to cart in navbar
  $(document).ready(function () {
    var cartCount = 0; // Initialize the cart count

    // Function to update the cart count in the navigation
    function updateCartCount() {
      var cartCountElement = $(".number-cart");
      cartCountElement.text(cartCount);

      // Toggle the visibility of the cart button based on the cart count
      var numberCart = $(".number-cart");

      if (cartCount === 0) {
        numberCart.hide(); // Hide the cart button
      } else {
        numberCart.show(); // Show the cart button
      }
    }

    // Function to handle the "Add to Cart" button click
    function addToCartButtonClick(event) {
      event.preventDefault(); // Prevent the default behavior of the button
      if (!$(this).hasClass("active-cart")) {
        cartCount++; // Increment the cart count when an item is added
        updateCartCount(); // Update the cart count and button visibility
        $(this).addClass("active-cart"); // Add the class to the clicked button
      }
    }

    // Add event listeners to the "Add to Cart" buttons
    var addToCartButtons = $(".btn-cart,.btn-add-to-cart");
    addToCartButtons.click(addToCartButtonClick);

    // Initialize the cart count and button visibility on page load
    updateCartCount();
  });

  // ====================================================================================================================================
  // abb to heart in navbar

  $(document).ready(function () {
    var heartCount = 0; // Initialize the heart count

    // Function to update the heart count in the navigation
    function updateHeartCount() {
      var heartCountElement = $(".number-heart");
      heartCountElement.text(heartCount);

      // Toggle the visibility of the heart button based on the heart count
      var numberHeart = $(".number-heart");

      if (heartCount === 0) {
        numberHeart.hide(); // Hide the heart button
      } else {
        numberHeart.show(); // Show the heart button
      }
    }

    // Function to handle the "Add to Heart" button click
    function addToHeartButtonClick(event) {
      event.preventDefault(); // Prevent the default behavior of the button
      if (!$(this).hasClass("active-heart")) {
        heartCount++; // Increment the heart count when an item is added
        updateHeartCount(); // Update the heart count and button visibility
        $(this).addClass("active-heart"); // Add the class to the clicked button
      }
    }

    // Add event listeners to the "Add to Heart" buttons
    var addToHeartButtons = $(".btn-heart");
    addToHeartButtons.click(addToHeartButtonClick);

    // Initialize the heart count and button visibility on page load
    updateHeartCount();
  });

  // ========================================================================================================================

  // Get all the list items inside the ul
  var starListItems = document.querySelectorAll(".box-Your-Rating-icon ul li");

  // Add a click event listener to each li element
  starListItems.forEach(function (li) {
    li.addEventListener("click", function () {
      // Toggle the "active-star" class on the clicked li element
      li.classList.toggle("active-star");
    });
  });

  // ===================================================================================================================================================================
  /* =================================================================================================================================== */
  // Quantity increase decrease
  // احصل على جميع عناصر الزر زيادة
  // const increaseButtons = document.querySelectorAll(".btn-increase-increase");

  // // احصل على جميع عناصر الزر نقص
  // const decreaseButtons = document.querySelectorAll(".btn-increase-decrease");

  // // احصل على جميع عناصر حقل الكمية
  // const quantityInputs = $(".qty-val");

  // // اضف معالج الحدث للأزرار زيادة
  // increaseButtons.forEach((button, index) => {
  //   button.addEventListener("click", () => {
  //     let currentValue = parseInt(quantityInputs[index].value);
  //     quantityInputs[index].value = currentValue + 1;
  //   });
  // });

  // // اضف معالج الحدث للأزرار نقص
  // decreaseButtons.forEach((button, index) => {
  //   button.addEventListener("click", () => {
  //     let currentValue = parseInt(quantityInputs[index].value);
  //     if (currentValue > 1) {
  //       quantityInputs[index].value = currentValue - 1;
  //     }
  //   });
  // });


   // delete

  //  $(document).ready(function () {
  //   // Add a click event handler for the delete buttons
  //   $(".btn-trash").click(function () {
  //     // Find the parent element to remove the entire item
  //     var itemContainer = $(this).closest(
  //       ".box-aside-cart-img-Quantity-trash-border,.box-body-cart"
  //     );

  //     if (itemContainer.length) {
  //       // Remove the entire item container from the DOM
  //       itemContainer.remove();
  //     }
  //   });
  // });

  // ===================================================================================================================================================================

  $(".product-small-thumb-4").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    speed: 800,
    asNavFor: ".product-large-thumbnail-4",
    // prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-angle-left"></i></button>',
    // nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });

  $(".product-large-thumbnail-4").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 800,
    draggable: false,
    swipe: false,
    asNavFor: ".product-small-thumb-4",
  });

  // ===================================================================================================================================================================
  /* Cart page */
  //

  $(document).ready(function () {
    let grandTotal = 0; // تخزين الإجمالي الفرعي الإجمالي

    // التعامل مع كل عنصر بشكل منفرد
    $(".box-item-cart-page").each(function () {
      const item = $(this);
      const priceItem = item.find(".price-item");
      const quantityInput = item.find(".qty-val");
      const totalElement = item.find(".total-item");

      // ابتدائيًا، قيمة السعر الأساسي
      const initialPrice = parseFloat(priceItem.text().replace(" ", ""));

      // حساب وعرض الإجمالي عند تحديث الكمية
      function updateTotal() {
        const quantity = parseInt(quantityInput.val());
        const total = initialPrice * quantity;
        totalElement.text(total.toFixed(1) + " ");

        // إعادة حساب الإجمالي الفرعي الإجمالي من جديد
        grandTotal = 0;
        $(".box-item-cart-page .total-item").each(function () {
          const itemTotal = parseFloat($(this).text().replace(" ", ""));
          grandTotal += itemTotal;
        });

        // عرض الإجمالي الفرعي الإجمالي
        $(".SUBTOTAL").text(grandTotal.toFixed(2) + " ");
      }

      // التحديث عند النقر على زر الزيادة
      item.find(".btn-increase-increase").on("click", function () {
        const currentQuantity = parseInt(quantityInput.val());
        quantityInput.val(currentQuantity + 1); // زيادة الكمية بمقدار 1
        updateTotal();
      });

      // التحديث عند النقر على زر النقص
      item.find(".btn-increase-decrease").on("click", function () {
        const currentQuantity = parseInt(quantityInput.val());
        if (currentQuantity > 1) {
          quantityInput.val(currentQuantity - 1); // نقص الكمية بمقدار 1
          updateTotal();
        }
      });

      // التحديث عند تغيير الكمية يدويًا
      quantityInput.on("input", updateTotal);

      // حساب وعرض الإجمالي عند تحميل الصفحة
      updateTotal();
    });
  });

  // -------------------------------------------------------
  $(document).ready(function () {
    // Function to extract and calculate the values
    function calculateTotal() {
      // Extract and calculate the values of DISCOUNT, TAX, SHIPPING
      var discountText = $(".DISCOUNT").text().trim();
      var discountValue = parseFloat(discountText.replace("", ""));

      var taxText = $(".TAX").text().trim();
      var taxValue = parseFloat(taxText.replace("", ""));

      var shippingText = $(".SHIPPING").text().trim();
      var shippingValue = parseFloat(shippingText);

      // Calculate the SUBTOTAL value
      var subtotalText = $(".SUBTOTAL").text().trim();
      var subtotalValue = parseFloat(subtotalText.replace("", ""));

      // Calculate the new TOTAL-ALL value
      var totalAllValue =
        subtotalValue + taxValue + shippingValue - discountValue;

      // Update the SUBTOTAL and TOTAL-ALL elements with the new values
      $(".SUBTOTAL").text(subtotalValue.toFixed(2) + " ");
      $(".TOTAL-ALL").text(totalAllValue.toFixed(2) + " ");
    }

    // Call the calculateTotal function initially
    calculateTotal();

    // Add a click event handler for the elements that might change the values
    $(".DISCOUNT, .TAX, .SHIPPING, .SUBTOTAL").click(function () {
      calculateTotal();
    });

    // Add a click event handler for the increase and decrease buttons
    $(".btn-increase-increase, .btn-increase-decrease").click(function () {
      calculateTotal();
    });
  });

  // -----------------------------------------------------
  // delete
  $(document).ready(function () {
    // Function to extract and calculate the values
    function calculateTotal() {
      // Extract and calculate the values of DISCOUNT, TAX, SHIPPING
      var discountText = $(".DISCOUNT").text().trim();
      var discountValue = parseFloat(discountText.replace("", ""));

      var taxText = $(".TAX").text().trim();
      var taxValue = parseFloat(taxText.replace("", ""));

      var shippingText = $(".SHIPPING").text().trim();
      var shippingValue = parseFloat(shippingText);

      // Calculate the SUBTOTAL value
      var subtotalText = $(".SUBTOTAL").text().trim();
      var subtotalValue = parseFloat(subtotalText.replace("", ""));

      // Calculate the new TOTAL-ALL value
      var totalAllValue =
        subtotalValue + taxValue + shippingValue - discountValue;

      // Ensure that the total is not less than zero
      if (totalAllValue < 0) {
        totalAllValue = 0;
      }

      // Update the SUBTOTAL and TOTAL-ALL elements with the new values
      $(".SUBTOTAL").text(subtotalValue.toFixed(2) + " ");
      $(".TOTAL-ALL").text(totalAllValue.toFixed(2) + " ");
    }

    // Call the calculateTotal function initially
    calculateTotal();

    // Add a click event handler for the elements that might change the values
    $(".DISCOUNT, .TAX, .SHIPPING, .SUBTOTAL").click(function () {
      calculateTotal();
    });

    // في حاله لا يوجد منتجات

    if ($(".box-item-cart-page").length > 0) {
      // If there are cart, show the container

      $(".box-Empty-cart-page").css("display", "none");
    }

    // Add a click event handler for the delete buttons
    $(".btn-trash").click(function () {
      // Find the parent element to remove the entire item
      var itemContainer = $(this).closest(
        ".box-item-cart-page"
      );

      if (itemContainer.length) {
        // Extract the item total as a float
        var totalElement = itemContainer.find(".total-item");
        var itemTotalText = totalElement.text();
        var itemTotal = parseFloat(itemTotalText.replace(" ", ""));

        if (!isNaN(itemTotal)) {
          // Remove the entire item container from the DOM
          itemContainer.remove();

          // Recalculate the subtotal after removing the item
          var grandTotal = 0;
          $(".box-item-cart-page").each(function () {
            var item = $(this);
            var totalElement = item.find(".total-item");
            var itemTotal = parseFloat(totalElement.text().replace(" ", ""));
            if (!isNaN(itemTotal)) {
              grandTotal += itemTotal;
            }
          });

          // Update the SUBTOTAL and TOTAL-ALL with the new totals
          $(".SUBTOTAL").text(grandTotal.toFixed(2) + " ");
          calculateTotal(); // Recalculate TOTAL-ALL after item removal
        }
      }

      // After removal, check if there are any remaining "box-item-cart-page" elements
      if ($(".box-item-cart-page").length === 0) {
        // If there are no cart, hide the container
        $(".box-Empty-cart-page").css("display", "block");
        $(".box-alert-head-cart-body-cart").css("display", "none");
        // box - alert - head - cart - body - cart;
      }
    });
  });

  // ===================================================================================================================================================================

  /* Cart Nav */

  $(document).ready(function () {
    let grandTotal = 0; // تخزين الإجمالي الفرعي الإجمالي

    // التعامل مع كل عنصر بشكل منفرد
    $(".box-item-cart-nav").each(function () {
      const item = $(this);
      const priceItem = item.find(".aside-cart-price-nav-cart");
      const quantityInput = item.find(".qty-val-nav-cart");
      const totalElement = item.find(".total-item-nav-cart");

      // ابتدائيًا، قيمة السعر الأساسي
      const initialPrice = parseFloat(priceItem.text().replace(" ", ""));

      // حساب وعرض الإجمالي عند تحديث الكمية
      function updateTotal() {
        const quantity = parseInt(quantityInput.val());
        const total = initialPrice * quantity;
        totalElement.text(total.toFixed(1) + " ");

        // إعادة حساب الإجمالي الفرعي الإجمالي من جديد
        grandTotal = 0;
        $(".box-item-cart-nav .total-item-nav-cart").each(function () {
          const itemTotal = parseFloat($(this).text().replace(" ", ""));
          grandTotal += itemTotal;
        });

        // عرض الإجمالي الفرعي الإجمالي
        $(".TOTAL-SUBTOTAL-Nav-Cart").text(grandTotal.toFixed(2) + " ");
      }

      // التحديث عند النقر على زر الزيادة
      item.find(".increaseButtonNavCart").on("click", function () {
        const currentQuantity = parseInt(quantityInput.val());
        quantityInput.val(currentQuantity + 1); // زيادة الكمية بمقدار 1
        updateTotal();
      });

      // التحديث عند النقر على زر النقص
      item.find(".decreaseButtonNavCart").on("click", function () {
        const currentQuantity = parseInt(quantityInput.val());
        if (currentQuantity > 1) {
          quantityInput.val(currentQuantity - 1); // نقص الكمية بمقدار 1
          updateTotal();
        }
      });

      // التحديث عند تغيير الكمية يدويًا
      quantityInput.on("input", updateTotal);

      // حساب وعرض الإجمالي عند تحميل الصفحة
      updateTotal();
    });
  });

  // -----------------------------------------------------
  // delete
  $(document).ready(function () {
    // Function to extract and calculate the values
    function calculateTotal() {
      // Calculate the SUBTOTAL value
      var subtotalText = $(".TOTAL-SUBTOTAL-Nav-Cart").text().trim();
      var subtotalValue = parseFloat(subtotalText.replace("", ""));

      // Calculate the new TOTAL-ALL value
      var totalAllValue = subtotalValue;

      // Ensure that the total is not less than zero
      if (totalAllValue < 0) {
        totalAllValue = 0;
      }

      // Update the SUBTOTAL and TOTAL-ALL elements with the new values
      $(".TOTAL-SUBTOTAL-Nav-Cart").text(subtotalValue.toFixed(2) + " ");
    }

    // Call the calculateTotal function initially
    calculateTotal();

    // Add a click event handler for the elements that might change the values
    $(".TOTAL-SUBTOTAL-Nav-Cart").click(function () {
      calculateTotal();
    });

    // في حاله لا يوجد منتجات

    if ($(".box-item-cart-nav").length > 0) {
      // If there are cart, show the container

      $(".box-Empty-cart").css("display", "none");
    }

    // Add a click event handler for the delete buttons
    $(".btn-trash").click(function () {
      // Find the parent element to remove the entire item
      var itemContainer = $(this).closest(".box-item-cart-nav");

      if (itemContainer.length) {
        // Extract the item total as a float
        var totalElement = itemContainer.find(".total-item-nav-cart");
        var itemTotalText = totalElement.text();
        var itemTotal = parseFloat(itemTotalText.replace(" ", ""));

        if (!isNaN(itemTotal)) {
          // Remove the entire item container from the DOM
          itemContainer.remove();

          // Recalculate the subtotal after removing the item
          var grandTotal = 0;
          $(".box-item-cart-nav").each(function () {
            var item = $(this);
            var totalElement = item.find(".total-item-nav-cart");
            var itemTotal = parseFloat(totalElement.text().replace(" ", ""));
            if (!isNaN(itemTotal)) {
              grandTotal += itemTotal;
            }
          });

          // Update the SUBTOTAL and TOTAL-ALL with the new totals
          $(".TOTAL-SUBTOTAL-Nav-Cart").text(grandTotal.toFixed(2) + " ");
          calculateTotal(); // Recalculate TOTAL-ALL after item removal
        }

        // After removal, check if there are any remaining "box-item-cart-nav" elements
        if ($(".box-item-cart-nav").length === 0) {
          // If there are no cart, hide the container
          $(".box-Empty-cart").css("display", "block");
        }
      }
    });
  });
  // ===================================================================================================================================================================
  //
});

// ===================================================================================================================================================================
// Favorites Nav
$(document).ready(function () {
  let grandTotal = 0; // تخزين الإجمالي الفرعي الإجمالي

  // التعامل مع كل عنصر بشكل منفرد
  $(".box-item-Favorites-nav").each(function () {
    const item = $(this);
    const priceItem = item.find(".aside-cart-price-nav-Favorites");
    const quantityInput = item.find(".qty-val-nav-Favorites");
    const totalElement = item.find(".total-item-nav-Favorites");

    // ابتدائيًا، قيمة السعر الأساسي
    const initialPrice = parseFloat(priceItem.text().replace(" ", ""));

    // حساب وعرض الإجمالي عند تحديث الكمية
    function updateTotal() {
      const quantity = parseInt(quantityInput.val());
      const total = initialPrice * quantity;
      totalElement.text(total.toFixed(1) + " ");

      // إعادة حساب الإجمالي الفرعي الإجمالي من جديد
      grandTotal = 0;
      $(".box-item-Favorites-nav .total-item-nav-Favorites").each(function () {
        const itemTotal = parseFloat($(this).text().replace(" ", ""));
        grandTotal += itemTotal;
      });

      // عرض الإجمالي الفرعي الإجمالي
      $(".TOTAL-SUBTOTAL-Nav-Cart").text(grandTotal.toFixed(2) + " ");
    }

    // التحديث عند النقر على زر الزيادة
    item.find(".increaseButtonNavCart").on("click", function () {
      const currentQuantity = parseInt(quantityInput.val());
      quantityInput.val(currentQuantity + 1); // زيادة الكمية بمقدار 1
      updateTotal();
    });

    // التحديث عند النقر على زر النقص
    item.find(".decreaseButtonNavCart").on("click", function () {
      const currentQuantity = parseInt(quantityInput.val());
      if (currentQuantity > 1) {
        quantityInput.val(currentQuantity - 1); // نقص الكمية بمقدار 1
        updateTotal();
      }
    });

    // التحديث عند تغيير الكمية يدويًا
    quantityInput.on("input", updateTotal);

    // حساب وعرض الإجمالي عند تحميل الصفحة
    updateTotal();
  });
});

// -----------------------------------------------------
// delete
$(document).ready(function () {
  // Function to extract and calculate the values
  function calculateTotal() {
    // Calculate the SUBTOTAL value
    var subtotalText = $(".TOTAL-SUBTOTAL-Nav-Cart").text().trim();
    var subtotalValue = parseFloat(subtotalText.replace("", ""));

    // Calculate the new TOTAL-ALL value
    var totalAllValue = subtotalValue;

    // Ensure that the total is not less than zero
    if (totalAllValue < 0) {
      totalAllValue = 0;
    }

    // Update the SUBTOTAL and TOTAL-ALL elements with the new values
    $(".TOTAL-SUBTOTAL-Nav-Cart").text(subtotalValue.toFixed(2) + " ");
  }

  // Call the calculateTotal function initially
  calculateTotal();

  // Add a click event handler for the elements that might change the values
  $(".TOTAL-SUBTOTAL-Nav-Cart").click(function () {
    calculateTotal();
  });

  // في حاله لا يوجد منتجات

  if ($(".box-item-Favorites-nav").length > 0) {
    // If there are cart, show the container

    $(".box-Favorites-empty").css("display", "none");
  }

  // Add a click event handler for the delete buttons
  $(".btn-trash").click(function () {
    // Find the parent element to remove the entire item
    var itemContainer = $(this).closest(".box-item-Favorites-nav");

    if (itemContainer.length) {
      // Extract the item total as a float
      var totalElement = itemContainer.find(".total-item-nav-Favorites");
      var itemTotalText = totalElement.text();
      var itemTotal = parseFloat(itemTotalText.replace(" ", ""));

      if (!isNaN(itemTotal)) {
        // Remove the entire item container from the DOM
        itemContainer.remove();

        // Recalculate the subtotal after removing the item
        var grandTotal = 0;
        $(".box-item-Favorites-nav").each(function () {
          var item = $(this);
          var totalElement = item.find(".total-item-nav-Favorites");
          var itemTotal = parseFloat(totalElement.text().replace(" ", ""));
          if (!isNaN(itemTotal)) {
            grandTotal += itemTotal;
          }
        });

        // Update the SUBTOTAL and TOTAL-ALL with the new totals
        $(".TOTAL-SUBTOTAL-Nav-Cart").text(grandTotal.toFixed(2) + " ");
        calculateTotal(); // Recalculate TOTAL-ALL after item removal
      }

      // After removal, check if there are any remaining "box-item-Favorites-nav" elements
      if ($(".box-item-Favorites-nav").length === 0) {
        // If there are no cart, hide the container
        $(".box-Favorites-empty").css("display", "block");
      }
    }
  });
});




// ===================================================================================================================================================================
// address
$(document).ready(function () {
  // Check if there are any "box-modal-address" elements
  if ($(".box-modal-address").length > 0) {
    // If there are addresses, show the container
    // $(".address-container").show();
    $(".address-container").css("display", "none");
  }

  $(".box-trash-address").on("click", function () {
    // Find the parent "box-modal-address" element and remove it
    $(this).closest(".box-modal-address").remove();

    // After removal, check if there are any remaining "box-modal-address" elements
    if ($(".box-modal-address").length === 0) {
      // If there are no addresses, hide the container
      // $(".address-container").hide();
      $(".address-container").css("display", "block");
    }
  });
});
//

// =============================================================
// stars rating
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // إلغاء تأشير جميع النجوم
        stars.forEach(s => s.classList.remove('active'));
        // قم بتأشير النجوم حتى النجمة الحالية (index)
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }
    });
});
