<template>
  <div>
    <h1>{{ contact.heading }}</h1>
    <p>{{ contact.instructions }}</p>
    <form @submit.prevent="onSave">
      <AppControlInput v-model="editedComment.author">{{
        contact.name
      }}</AppControlInput>
      <AppControlInput v-model="editedComment.email">{{
        contact.email
      }}</AppControlInput>
      <AppControlInput v-model="editedComment.title">{{
        contact.title
      }}</AppControlInput>
      <AppControlInput
        control-type="textarea"
        v-model="editedComment.content"
        >{{ contact.content }}</AppControlInput
      >
      <AppButton :class="'confirm'" type="submit">{{ contact.send }}</AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
        >{{ contact.cancel }}</AppButton
      >
    </form>
    <InfoAlert v-if="showAlertMessage">
      {{ alertMessage }}
      <div v-if="error">
        <AppButton @click="onCloseInfoAlert">Close</AppButton>
      </div>
    </InfoAlert>
  </div>
</template>
<script>
import AppButton from "../UI/AppButton.vue";
import AppControlInput from "../UI/AppControlInput.vue";
import MessagesViewer from "../MessagesViewer.vue";
import InfoAlert from "../InfoAlert.vue";

export default {
  components: {
    AppButton,
    AppControlInput,
    MessagesViewer,
    InfoAlert,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedComment: this.comment
        ? { ...this.comment }
        : {
            author: "",
            title: "",
            email: "",
            content: "",
          },
      showAlertMessage: false,
      alertMessage: "Message sent. Redirecting back to home page...",
      error: false,
    };
  },
  computed: {
    isEnglish() {
      return this.$store.getters.getLanguage === "English";
    },
    contact() {
      const isEnglish = this.$store.getters.getLanguage === "English";
      if (isEnglish)
        return {
          heading: "Contact Form",
          instructions: "Please fill in your information below.",
          name: "Name",
          email: "Email",
          title: "Title",
          content: "Content",
          send: "Send",
          cancel: "Cancel",
        };

      if (!isEnglish)
        return {
          heading: "お問い合わせフォーム",
          instructions: "以下に情報を入力してください。",
          name: "名前",
          email: "Eメール",
          title: "件名",
          content: "内容",
          send: "送信",
          cancel: "キャンセル",
        };
    },
  },
  methods: {
    async onSave() {
      this.error = false;
      try {
        await this.$store.dispatch("createMessage", this.editedComment);

        this.showAlertMessage = true;
        setTimeout(() => {
          this.$router.push("/");
        }, 3000);
      } catch ({ error }) {
        this.error = true;
        this.showAlertMessage = true;
        this.alertMessage =
          "Oops something went wrong. Please try again later or send an email instead. Error message: " +
          error;
      }
    },

    onCloseInfoAlert() {
      this.error = false;
      this.showAlertMessage = false;
    },

    onCancel() {
      this.editedComment.author = "";
      this.editedComment.title = "";
      this.editedComment.email = "";
      this.editedComment.content = "";

      this.$router.push("/contact");
    },
  },
};
</script>
<style scoped>
form {
  margin-bottom: 1rem;
}
</style>
