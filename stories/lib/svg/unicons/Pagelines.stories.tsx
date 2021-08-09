import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Pagelines, PagelinesPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Pagelines",
  component: Pagelines,
} as ComponentMeta<typeof Pagelines>;

const Template: ComponentStory<typeof Pagelines> = (args: PagelinesPropsI) => (
  <x.div display="flex" gap="20px">
    <Pagelines {...args} />
    <Pagelines {...args} fill="red.500" />
    <Pagelines {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
