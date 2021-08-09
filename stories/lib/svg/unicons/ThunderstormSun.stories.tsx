import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ThunderstormSun, ThunderstormSunPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ThunderstormSun",
  component: ThunderstormSun,
} as ComponentMeta<typeof ThunderstormSun>;

const Template: ComponentStory<typeof ThunderstormSun> = (
  args: ThunderstormSunPropsI
) => (
  <x.div display="flex" gap="20px">
    <ThunderstormSun {...args} />
    <ThunderstormSun {...args} fill="red.500" />
    <ThunderstormSun {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
