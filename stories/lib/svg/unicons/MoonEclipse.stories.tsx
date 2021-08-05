import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { MoonEclipse, MoonEclipsePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/MoonEclipse",
  component: MoonEclipse,
} as ComponentMeta<typeof MoonEclipse>;

const Template: ComponentStory<typeof MoonEclipse> = (
  args: MoonEclipsePropsI
) => (
  <x.div display="flex" gap="20px">
    <MoonEclipse {...args} />
    <MoonEclipse {...args} fill="red.500" />
    <MoonEclipse {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
