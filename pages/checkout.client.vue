<template>
  <div>
    <CartPageTitle />
    <v-container
      ><v-row
        ><v-col cols="12" md="6" class="position-realtive">
          <p class="text-h4 text-grey my-5">Your Invoice</p>
          <v-form>
            <div class="w-100 d-flex">
              <div class="w-50 pa-2">
                <label for="first name">
                  First Name <span class="text-orange-accent-4">*</span>
                </label>
                <input
                  label="first name"
                  class="w-100 border-md h-100 rounded-xl"
                  v-model="formData.firstname"
                  :class="{ error: error?.firstname?._errors }"
                />
                <p
                  v-if="error?.firstname?._errors"
                  class="text-red text-caption"
                >
                  <span
                    v-for="error in error.firstname?._errors"
                    :key="error"
                    >{{ error.toLocaleLowerCase() }}</span
                  >
                </p>
              </div>
              <div class="w-50 pa-2">
                <label for="first name">
                  Last Name <span class="text-orange-accent-4">*</span>
                </label>
                <input
                  label="last name"
                  class="w-100 border-md h-100 rounded-xl"
                  :class="{ error: error?.lastname?._errors }"
                  v-model="formData.lastname"
                />
                <p
                  v-if="error?.lastname?._errors"
                  class="text-red text-caption"
                >
                  <span v-for="error in error.lastname?._errors" :key="error">{{
                    error.toLocaleLowerCase()
                  }}</span>
                </p>
              </div>
            </div>
            <div class="pa-2">
              <label for="Company name">
                Company Name(optional)
                <span class="text-orange-accent-4">*</span>
              </label>
              <input
                label="Company name"
                class="w-100 border-md h-100 rounded-xl"
                v-model="formData.company"
              />
            </div>
            <div class="pa-2">
              <label for="first name">
                Email <span class="text-orange-accent-4">*</span>
              </label>
              <input
                label="Email"
                class="w-100 border-md h-100 rounded-xl"
                v-model="formData.email"
                :class="{ error: error?.email?._errors }"
              />
              <p v-if="error?.email?._errors" class="text-red text-caption">
                <span v-for="error in error.email?._errors" :key="error">{{
                  error.toLocaleLowerCase()
                }}</span>
              </p>
            </div>
            <div class="pa-2">
              <label for="Street name">
                Street Adress<span class="text-orange-accent-4">*</span>
              </label>
              <input
                label="Street name"
                class="w-100 border-md h-100 rounded-xl"
                v-model="formData.streetAdress"
                :class="{ error: error?.streetAdress?._errors }"
              />
              <p
                v-if="error?.streetAdress?._errors"
                class="text-red text-caption"
              >
                <span
                  v-for="error in error.streetAdress?._errors"
                  :key="error"
                  >{{ error.toLocaleLowerCase() }}</span
                >
              </p>
            </div>
            <div class="pa-2">
              <label for="City name">
                City <span class="text-orange-accent-4">*</span>
              </label>
              <input
                label="City name"
                class="w-100 border-md h-100 rounded-xl"
                v-model="formData.city"
                :class="{ error: error?.city?._errors }"
              />
              <p v-if="error?.city?._errors" class="text-red text-caption">
                <span v-for="error in error.city?._errors" :key="error">{{
                  error.toLocaleLowerCase()
                }}</span>
              </p>
            </div>

            <div class="pa-2">
              <label for="ZIP Code">
                ZIP Code <span class="text-orange-accent-4">*</span>
              </label>
              <input
                label="ZIP Code"
                class="w-100 border-md h-100 rounded-xl"
                v-model="formData.ZipCode"
                type="number"
                :class="{ error: error?.ZipCode?._errors }"
              />
              <p v-if="error?.ZipCode?._errors" class="text-red text-caption">
                <span v-for="error in error.ZipCode?._errors" :key="error">{{
                  error.toLocaleLowerCase()
                }}</span>
              </p>
            </div>
            <div class="pa-2">
              <label for="first name">
                Phone Number <span class="text-orange-accent-4">*</span>
              </label>
              <input
                label="first name"
                class="w-100 border-md h-100 rounded-xl"
                v-model="formData.phoneNumber"
                type="number"
                :class="{ error: error?.phoneNumber?._errors }"
              />
              <p
                v-if="error?.phoneNumber?._errors"
                class="text-red text-caption"
              >
                <span
                  v-for="error in error.phoneNumber?._errors"
                  :key="error"
                  >{{ error.toLocaleLowerCase() }}</span
                >
              </p>
            </div>
          </v-form>
          <div>
            <client-only v-if="stripe">
              <stripe-checkout
                ref="checkoutRef"
                mode="payment"
                :pk="publishableKey"
                :line-items="lineItems"
                :success-url="successURL"
                :cancel-url="cancelURL"
                @loading="(v) => (loading = v)"
              />
            </client-only>
            <v-btn
              class="w-100 bg-orange-accent-4"
              ref="checouktBtn"
              @click="submit"
              >Complate Checkout</v-btn
            >
          </div></v-col
        >
        <v-col cols="12" md="6"><OrderCard /></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "~/sotres/ProductSotre";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import { z } from "zod";

const userSchema = z.object({
  firstname: z.string().min(1, { message: "First Name Is Required" }),
  lastname: z.string().min(1, { message: "Last Name Is Required" }),
  company: z.string(),
  ZipCode: z.number().nullable(),
  email: z.string().email(),
  city: z.string().min(1, { message: "City Is Required" }),
  streetAdress: z.string().min(1, { message: "Street Is Required" }),
  phoneNumber: z.number().nullable(),
});
type formSchema = z.infer<typeof userSchema>;
const error = ref<z.ZodFormattedError<formSchema> | null>();
const formData = ref<formSchema>({
  firstname: "",
  lastname: "",
  company: "",
  ZipCode: null,
  email: "",
  city: "",
  streetAdress: "",
  phoneNumber: null,
});

const submit = () => {
  const valid = userSchema.safeParse(formData.value);
  error.value = valid.error?.format();
  console.log(valid.success);
  if (!valid.success) return;
  stripe.value = true;
  setTimeout(() => {
    (checkoutRef.value as any).redirectToCheckout();
    stripe.value = false;
   
  }, 200);
};
const publishableKey =
  "pk_test_51PxfmTRqTO26FYa43jk6sUkOtj1XGmwGPGX2H3UcIe1ki2Laizy82L7bWrT3aGndduIggaolgbpEzEABSUIFIROD00rvXctMtJ";
const loading = ref<boolean>(false);
const lineItems = ref([
  {
    price: "price_1PxgJNRqTO26FYa4Ne3h0IKh",
    quantity: 1,
  },
]);
const successURL = "http://localhost:3000";
const cancelURL = "http://localhost:3000";
const checkoutRef = ref<any>();
const stripe = ref<boolean>(false);
const checouktBtn = ref<HTMLButtonElement>();

definePageMeta({
  middleware: [
    function () {
      const productStore = useProductStore();
      if (productStore.cart.length === 0) return navigateTo("/cart");
    },
  ],
});
</script>
<style scoped>
.text-field {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
}
input {
  height: 40px !important;
}
.error {
  border-color: red !important;
}
.error::before {
  content: "";
  position: absolute;
  width: 500px;
  background-color: blueviolet;
  z-index: 111111111;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
