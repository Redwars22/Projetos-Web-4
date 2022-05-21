import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-balance-monitor',
  templateUrl: './balance-monitor.component.html',
  styleUrls: ['./balance-monitor.component.css'],
})
export class BalanceMonitorComponent implements OnInit {
  amountOfMoney: number = 200.99;
  successfull: boolean = false;

  constructor() {}

  ngOnInit() {
    document.getElementById('expenses-list').innerHTML =
      localStorage.getItem('list');
    if (localStorage.getItem('money'))
      this.amountOfMoney = parseFloat(localStorage.getItem('money'));
  }

  async addMoney() {
    const { value: money } = await Swal.fire({
      title: 'Adicionar dinheiro',
      input: 'number',
      inputValue: '0.00',
      inputLabel: 'Quanto dinheiro deseja adicionar ao Radioact?',
      inputPlaceholder: 'Insira a quantia de dinheiro',
    });

    this.amountOfMoney += parseFloat(money);
    localStorage.setItem('money', this.amountOfMoney.toString());
  }

  spendMoney() {
    const productName = (
      document.getElementById('product-description') as HTMLInputElement
    ).value;
    const price = (
      document.getElementById('value-to-spend') as HTMLInputElement
    ).value;

    if (productName == '' || price == '') {
      Swal.fire({
        title: 'Alto lá!',
        icon: 'error',
        text: 'Vocẽ precisa preencher TODOS os campos!',
      });
    } else {
      const spentMoney: number = parseFloat(
        (document.getElementById('value-to-spend') as HTMLInputElement).value
      );

      if (spentMoney > this.amountOfMoney) {
        Swal.fire({
          title: 'Ei, espera aí...',
          text: 'Você não pode gastar mais dinheiro do que o que tem!',
          icon: 'error',
        });
        this.successfull = false;
      } else {
        this.amountOfMoney -= spentMoney;
        this.successfull = true;
      }

      if (this.successfull) this.updateList();
    }
  }

  autoSaveData() {
    localStorage.setItem(
      'list',
      document.getElementById('expenses-list').innerHTML
    );
    localStorage.setItem('money', this.amountOfMoney.toString());
    Swal.fire({
      title: 'Lista atualizada',
      icon: 'info',
    });
  }

  updateList() {
    const productName = (
      document.getElementById('product-description') as HTMLInputElement
    ).value;
    const price = (
      document.getElementById('value-to-spend') as HTMLInputElement
    ).value;
    const template =
      "<li style='color: white; font-weight: bold; font-size: 20px; text-align: left'>" +
      productName.toUpperCase() +
      "<span style='color: red'> [-R$ " +
      price +
      ']</span></li>';
    const code = template + document.getElementById('expenses-list').innerHTML;
    document.getElementById('expenses-list').innerHTML = code;
    this.autoSaveData();
  }
}
