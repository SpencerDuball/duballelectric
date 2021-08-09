import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AngleLeftB, AngleLeftBPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/AngleLeftB",
  component: AngleLeftB,
} as ComponentMeta<typeof AngleLeftB>;

const Template: ComponentStory<typeof AngleLeftB> = (
  args: AngleLeftBPropsI
) => (
  <x.div display="flex" gap="20px">
    <AngleLeftB {...args} />
    <AngleLeftB {...args} fill="red.500" />
    <AngleLeftB {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
