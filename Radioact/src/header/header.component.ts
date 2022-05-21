import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { version } from '../main';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  versionString = version;
  isDEV: boolean = false;

  constructor() {}

  ngOnInit() {}

  showAboutAlert() {
    Swal.fire({
      title: 'ProjectRadioact - Gerenciador de Gastos e Dinheiro',
      text: 'Versão' + this.versionString + '. Desenvolvido por @Redwars22.',
      html: '<a href="">LINK DO MEU GITHUB</a>',
      icon: 'info',
    });
  }

  resetEverything() {
    Swal.fire({
      title: 'Tem certeza de que deseja deletar tudo?',
      text: 'ESTA AÇÃO É IRREVERSÍVEL!',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('money', '0.00');
        localStorage.setItem('list', '');
        localStorage.setItem('isFirstTime', 'false');

        document.location.reload();
      } else {
        Swal.fire({
          title: 'Os dados não foram deletados!',
          icon: 'info',
          text: 'Caso queira deletar tudo futuramente, clique em RESETAR.',
        });
      }
    });
  }

  showHelpPage() {
    window.open(
      'https://redwars22.notion.site/Ajuda-do-Project-Radioact-831ad1933ac248b5ae9d3628e70a9ead',
      '_blank'
    );
  }
}
