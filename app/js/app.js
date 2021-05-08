const controller = new DealController();
$('.form')
    .submit(controller.add.bind(controller));
