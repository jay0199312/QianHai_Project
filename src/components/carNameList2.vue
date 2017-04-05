<template>
  <div class="page-indexlist-wrapper">

    <mt-index-list>
      <mt-index-section v-for="item in alphabet" :index="item.initial">
        <mt-cell v-for="cell in item.cells" :title="cell">
          <img slot="icon" src="../assets/logo.png" width="24" height="24">
        </mt-cell>
      </mt-index-section>
    </mt-index-list>

  </div>
</template>
<script type="text/babel">
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

  export default {
    data() {
      return {
        alphabet: []
      };
    },

    created() {

      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial );

        this.alphabet.push({
          initial,
          cells
        });
        let aon = this.alphabet;
        console.log(initial,cells)
      });
    }
  };

</script>
<style scoped lang="scss">

</style>
