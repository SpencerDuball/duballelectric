import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Package, PackagePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Package",
  component: Package,
} as ComponentMeta<typeof Package>;

const Template: ComponentStory<typeof Package> = (args: PackagePropsI) => (
  <x.div display="flex" gap="20px">
    <Package {...args} />
    <Package {...args} fill="red.500" />
    <Package {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
