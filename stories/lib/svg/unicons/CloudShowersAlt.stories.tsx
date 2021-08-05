import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudShowersAlt, CloudShowersAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CloudShowersAlt",
  component: CloudShowersAlt,
} as ComponentMeta<typeof CloudShowersAlt>;

const Template: ComponentStory<typeof CloudShowersAlt> = (
  args: CloudShowersAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <CloudShowersAlt {...args} />
    <CloudShowersAlt {...args} fill="red.500" />
    <CloudShowersAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
