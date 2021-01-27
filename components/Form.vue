<template>
  <div>
    <b-form @submit="handleSubmit" @reset="handleReset" v-if="show">
      <b-form-group id="film-name-group" label="Film Name:" label-for="film-name">
        <b-form-input
          id="film-name"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="film-release-group" label="Film Release:" label-for="film-release">
        <b-form-datepicker 
          id="film-release"  
          v-model="form.release"
          required
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group id="film-rating-group" label="Film Rating:" label-for="film-rating" v-slot="{ ariaDescribedby }">
        <b-form-radio-group
          id="film-rating"
          v-model="form.rating"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="radio-options"
        ></b-form-radio-group>
      </b-form-group>

        <b-form-group id="film-image-group" label="Film Image:" label-for="film-image">
          <b-form-file
            id="film-image"
            v-model="form.file"
            :state="Boolean(form.file)"
            v-bind:pointer="form.fileName"
            placeholder="Choose a image or drop it here..."
            drop-placeholder="Drop image here..."
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            @change="selectFile"
          ></b-form-file>
        </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        form: {
          name: '',
          release: '',
          rating:'1',
          file: null,
          fileName: ''
        },
        show: true,
        options: [
          { text: 'One', value: '1' },
          { text: 'Two', value: '2' },
          { text: 'Tree', value: '3' },
          { text: 'Four', value: '4' },
        ]
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        axios.post('https://infinite-lake-41295.herokuapp.com/films', {
          name: this.form.name,
          release: this.form.release,
          rating: this.form.rating,
          banner: this.form.fileName
        });
      },
      handleReset(e) {
        e.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async selectFile(e) {
        const file = e.target.files[0];
        /* Make sure file exists */
        if (!file) return;
        /* create a reader */
        const readData = (f) =>  new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(f);
        });
        /* Read data */
        const data = await readData(file);
        const publicId = file.name.replace(/.jpeg|.jpg|.png/, '') + Date.now();
        this.form.fileName = publicId;
        /* upload the converted data */
        const instance = this.$cloudinary.upload(data, {
          public_id: publicId,
          folder: 'movie_posters',
          uploadPreset: 'ml_default',
        })
      }
    }
  }
</script>