# QualWeb plugin to suppress CMP banners

This package is a tiny wrapper around [@inqludeit/cmp-b-gone](https://www.github.com/tellus/cmp-b-gone) and is meant to be
used as a minimal way to use the module in your QualWeb workflows.

For more advanced scenarios, consider using that package directly, instead.

The purpose of this package is to suppress suppress CMP (Consent Management
Platform) banners. These "cookie banners" are required on sites operated in the
European Union, and are thus present on tonnes of websites.

There are at least two good reasons to use the module:

1. Some websites hide or completely withhold their actual content until consent to a cookie has been given. This plugin enables evaluating those sites with QualWeb by automating the consent action.
2. Many CMP banners have accessibility issues that are inherent to the implementation, and not the site itself. This causes a skew in the results of sites, giving the impression, for example, that the website has contrast issues when in fact the only component with contrast issues is the banner.

*NOTE: this software was built for the explicit purposes of enabling and enhancing automated accessibility testing, **NOT** to bypass the CMP banner for otherwise normal use of a website. If you use this software to bypass a banner it is presumed that you have accepted all terms of the site's use, including its cookie policy.*

# Installation and basic usage

Install it like any other package:

`pnpm install @inqludeit/qualweb-plugin-cmp`

Sometime *before* calling `QualWeb#evaluate()`:

```typescript
import { createPlugin } from '@inqludeit/qualweb-plugin-cmp';

qualweb.use(await createPlugin());
```

This will initialise the plugin with all the descriptors present in the package's `descriptors` folder.

During evaluation, the plugin will try to identify the CMP in use on a site to be evaluated. If it *fails* to detect any CMP, the evaluation will also be caused to fail. For this reason, we recommend running single URLs through QualWeb, since any missing descriptors will throw for the entire task.


# CMP descriptors

We call the object that can identify and bypass a cookie banner a "descriptor". 

Out of the box, @qualweb/cmp-b-gone comes bundled with a bunch of descriptors we've written by hand. They are all "simple" descriptors, based exclusively on CSS selectors. If the list of descriptors is insufficient, you can supplement them in the call to `createPlugin()` (see the docs in [@inqludeit/cmp-b-gone](https://www.github.com/tellus/cmp-b-gone) for more details on this).
