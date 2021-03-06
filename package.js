Package.describe({
  name: 'xavcz:nova-dark-theme',
  version: '0.26.3-nova',
  summary: 'A dark theme for Nova',
  git: 'https://github.com/xavcz/nova-dark-theme',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'nova:core@0.26.3-nova',
    'fourseven:scss@3.4.1',
    // 'juliancwirko:postcss@1.0.0-rc.4',
    // 'seba:minifiers-autoprefixer@0.0.1',
    // 'twbs:bootstrap@=4.0.0-alpha.2'
  ]);

  api.addFiles([
    'lib/stylesheets/bootstrap.css',

    // 'lib/stylesheets/solid.1.4.4.css',
    'lib/stylesheets/_breakpoints.scss',
    'lib/stylesheets/_colors.scss',
    'lib/stylesheets/_variables.scss',
    'lib/stylesheets/_global.scss',
    'lib/stylesheets/_accounts.scss',
    'lib/stylesheets/_categories.scss',
    'lib/stylesheets/_cheatsheet.scss',
    'lib/stylesheets/_comments.scss',
    'lib/stylesheets/_header.scss',
    'lib/stylesheets/_forms.scss',
    'lib/stylesheets/_other.scss',
    'lib/stylesheets/_posts.scss',
    'lib/stylesheets/_newsletter.scss',
    'lib/stylesheets/_spinner.scss',
    'lib/stylesheets/_users.scss',
    'lib/stylesheets/main.scss'
  ], ['client']);

});
