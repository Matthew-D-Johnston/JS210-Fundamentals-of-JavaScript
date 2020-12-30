function greetings(names, specs) {
  let name = names.join(' ');
  let title = `${specs.title} ${specs.occupation}`;
  let text = `Hello, ${name}! Nice to have a ${title} around.`;

  console.log(text);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
