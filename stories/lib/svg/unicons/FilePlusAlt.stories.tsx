import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FilePlusAlt, FilePlusAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FilePlusAlt",
  component: FilePlusAlt,
} as ComponentMeta<typeof FilePlusAlt>;

const Template: ComponentStory<typeof FilePlusAlt> = (
  args: FilePlusAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FilePlusAlt {...args} />
    <FilePlusAlt {...args} fill="red.500" />
    <FilePlusAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
