<template>
  <div class="home">
    <img class="logo" src="..\assets\images\icon-ray.svg" />
    <div class="rectangle-5">
      <h6 class="dropdown-header">Booking 123456</h6>
      <a class="dropdown-item" href="#">Upcoming Bookings</a>
      <a class="dropdown-item" href="#">Bookings in Progress</a>
    </div>
    <div class="top-info">
      <div class="title">Booking 12345678</div>
      <div class="top-info-row row">
        <div class="col">
          <img
            class="col1-img image-top-info"
            src="..\assets\images\col1-img.svg"
          />
        </div>
        <div class="col">
          <img
            class="col2-img image-top-info"
            src="..\assets\images\col2-img.svg"
          />
        </div>
        <div class="col">
          <img
            class="col3-img image-top-info"
            src="..\assets\images\col3-img.svg"
          />
        </div>
      </div>
    </div>
    <div class="details">
      <div class="details-top">
        <label class="col-sm-3 col-form-label title-details">
          Booking Details
        </label>
        <input
          type="checkbox"
          class="checkbox-private"
          id="checkbox"
          v-model="checked"
        />
        <label
          for="checkbox"
          class="checkbox-private-label"
          title="Click to Mark Private"
        ></label>
      </div>
      <div class="details-form">
        <form>
          <div class="form-group row">
            <label for="input1" class="col-sm-3 col-form-label">
              <b>Booking type</b>
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control-plaintext"
                id="input1"
                value="Eye Examination"
              />
            </div>
          </div>
          <hr class="separator" />
          <div class="form-group row">
            <label for="input2" class="col-sm-3 col-form-label">
              <b>Booking Status</b>
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control-plaintext"
                id="input2"
                value="Confirmed"
              />
            </div>
          </div>
          <hr class="separator" />
          <div class="form-group row">
            <label for="input3" class="col-sm-3 col-form-label">
              <b>Medical History</b>
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control-plaintext"
                id="input3"
                value="Received"
              />
            </div>
          </div>
          <hr class="separator" />
          <div class="form-group row">
            <label for="input4" class="col-sm-3 col-form-label">
              <b>On Behalf Of</b>
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control-plaintext"
                id="input4"
                placeholder="Click to add On behalf Of"
              />
            </div>
          </div>
          <hr class="separator" />
          <div class="form-group row">
            <label for="input5" class="col-sm-3 col-form-label">
              <b>Bill To</b>
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control-plaintext"
                id="input5"
                value="Coles Myer"
              />
            </div>
          </div>
          <hr class="separator" />
          <div class="form-group row">
            <label for="input6" class="col-sm-3 col-form-label">
              <b>Report To</b>
            </label>
            <div class="col-sm-9">
              <select id="inputState" class="form-control">
                <option selected>Choose to who send the report to...</option>
                <option value="SCH">SCH</option>
                <option value="Alpha Wann">Alpha Wann</option>
                <option value="Nekfeu">Nekfeu</option>
                <option value="Damso">Damso</option>
              </select>
            </div>
          </div>
          <hr class="separator" />
          <div class="form-group row">
            <label for="input7" class="col-sm-3 col-form-label">
              <b>Interpreter Required</b>
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control-plaintext"
                id="input7"
                placeholder="Click to add details of required interpreter"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="notes-area">
      <div class="row">
        <div class="col-sm-3 my-auto">
          <label class="title-note"> Notes </label>
        </div>
        <div class="col-sm-9 my-auto">
          <div class="add-note">
            <label class="label-add-note"> Files </label>
            <!-- button launch modal -->
            <button
              class="button-add-note"
              type="button"
              @click="showModal"
            />
          </div>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="note in notes" v-bind:key="note.id" class="list-group-item">
          <div class="row">
            <div class="col-sm-2 my-auto">
              <label> {{ note.name }} </label>
            </div>
            <div class="col-sm-3 my-auto">
              <label> {{ note.time }} </label>
            </div>
            <div class="col-sm-6 my-auto">
              <label> {{ note.text }} </label>
            </div>
            <div class="col-sm-1 my-auto">
              <button
                v-on:click="deleteNote(note)"
                class="button-delete-note"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      @saveNote="addNote"
    />
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: {
    'Modal': Modal
  },
  data () {
    return {
      notes: [
        {
          id: 1,
          name: 'Penny Black',
          time: '09:11 AM 12/09/2020',
          text:
            'Customer may require assistance when arriving at the appointment, due to being in a wheelchair and attending appointment on their own.'
        },
        {
          id: 2,
          name: 'Penny Black',
          time: '3:45 PM 11/12/2020',
          text:
            'He speak a lot so we need someone to help him when he arrived'
        }
      ],
      checked: false,
      isModalVisible: false
    }
  },
  methods: {
    deleteNote: function (note) {
      this.notes.splice(this.notes.indexOf(note), 1)
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    addNote (newNote) {
      this.isModalVisible = false
      this.notes.push({name: 'Penny Black', time: '6:11 PM 21/01/2021', text: newNote})
    }
  }
}
</script>

<style>
.home {
  position: absolute;
  display: flex;
  height: 100%;
  left: 58px;
}
.logo {
  width: 132px;
  height: 72px;
}
.rectangle-5 {
  position: absolute;
  width: 220px;
  bottom: 0;
  top: 76px;
  background: #fafafa;
}
.dropdown-header {
  background: #eaeaea;
}
.top-info {
  position: absolute;
  left: 250px;
  width: 1082px;
}
.checkbox-private-label {
  float: right;
  margin-top: 3px;
  margin-right: 10px;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  background-image: url(../assets/images/private-icon-shadow.svg);
  height: 32px;
  width: 32px;
  display: inline-block;
  padding: 0 0 0 0px;
}
input[type="checkbox"]:checked + label {
  background-image: url(../assets/images/private-icon-checked.svg);
  height: 32px;
  width: 32px;
  display: inline-block;
  padding: 0 0 0 0px;
}
.title {
  padding-top: 15px;
  width: 150px;
}
.top-info-row {
  padding-top: 40px;
}
.details {
  position: absolute;
  left: 250px;
  width: 1082px;
  top: 220px;
  border: 1px solid #eaeaea;
}
.details-top {
  background-color: #ffc0cb;
}
.title-details {
  padding-left: 15px;
}
.separator {
  margin-top: 0;
  margin-bottom: 0;
}
.form-group {
  padding-left: 15px;
  margin-bottom: 0;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}
.row > [class*="col-"] {
  display: flex;
  flex-direction: column;
}
.custom-checkbox {
  left: 0;
}
.notes-area {
  position: absolute;
  left: 250px;
  width: 1082px;
  top: 550px;
  border: 1px solid #eaeaea;
}
.add-note {
  display: inline-flex;
  align-items: center;
  height: 50px;
  background-color: #ffc0cb;
  padding-left: 20px;
}
.button-add-note {
  margin-left: auto;
  border-radius: 100px;
  width: 119px;
  height: 39px;
  background-image: url(../assets/images/button-add-note.svg);
}
.button-delete-note {
  background-image: url(../assets/images/delete-icon.svg);
  width: 40px;
  height: 40px;
}
.title-note {
  padding-left: 1.25rem;
}
@media (max-width: 1024px) {
  .top-info {
    width: 700px;
  }
  .image-top-info {
    width: 210px;
  }
  .top-info-row {
    padding-top: 20px;
  }
  .details {
    width: 700px;
    top: 150px;
  }
  .notes-area {
    width: 700px;
    top: 500px;
  }
}
</style>