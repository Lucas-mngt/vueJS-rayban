<script>
  export default {
    name: 'modal',
    template: '#modal',
    data () {
      return {
        newNote: null
      }
    },
    methods: {
      close (event) {
        this.$emit('close')
      },
      saveNote (event) {
        this.$emit('saveNote', this.newNote)
      }
    }
  }
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            Add Note
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <input
                type="text"
                class="form-control-plaintext"
                id="inputNote"
                v-model="newNote"
                placeholder="Write your note here"
              />
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn btn-cancel"
              @click="close"
              aria-label="Close modal"
            >
              <label class="cancel-text"> Cancel </label>
            </button>
            <button
              type="button"
              class="btn btn-save"
              @click="saveNote()"
              aria-label="Save Note"
              :disabled='newNote == null'
            >
              Save
            </button>
            
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
  .modal-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    position: absolute;
    top: 500px;
    left: 550px;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    width: 500px;
    height: 300px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
  .btn {
    width: 120px;
    border-radius: 5px;
    color: white;
    border-radius: 50px;
  }
  .btn-save {
    background: #525252;
  }
  .cancel-text {
    color: #3FA2F7;
  }
</style>